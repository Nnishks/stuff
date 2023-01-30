import getConfig from "next/config"
import { useMutation } from "@blitzjs/rpc"
import { Menu, MenuItem, Snackbar } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { CloudUploadOutlined } from "@mui/icons-material"
// import createAttachment from "app/attachments/mutations/createAttachment"
import { Alert } from '@mui/material';
import LinearWithValueLabel from "./LinearProgressWithLabel"
import { getAwsBucket } from "app/core/utils/aws"
import { useSnackbar } from "notistack"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    uploadIcon: {
      height: "20px",
      width: "20px",
      marginLeft: "20px",
      cursor: "pointer",
    },
    imageUpload: {
      "& input": {
        display: "none",
        cursor: "pointer",
      },
    },
    label: {
      cursor: "pointer",
      width: "100%",
    },
  })
)

function UploadMedia(props) {
  const { publicRuntimeConfig } = getConfig()
  const { enqueueSnackbar } = useSnackbar()
  const { fields, currentUser, storeInfo } = props
  const options = fields.filter((field) => field.isUploadRequired)
  // const [createAttachmentMut] = useMutation(createAttachment)
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleUploadMenu = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [openSnack, setOpenSnack] = useState(false)

  useEffect(() => {
    if (uploadError) {
      setOpenSnack(true)
    }
  }, [uploadError])
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpenSnack(false)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [progress, setProgress] = useState(0)

  const convertFilesObjToArray = (files) => {
    return Object.keys(files).map(function (key) {
      return files[key]
    })
  }

  const myBucket = getAwsBucket()

  const updateAttachments = async (name, url, field, type) => {
    try {
      // const data = await createAttachmentMut({
      //   tenantid: 0,
      //   isdeleted: false,
      //   ffasectionid: props.sectionId,
      //   ffasectionname: props.sectionName,
      //   subsectionname: props.subSectionName,
      //   fieldname: field,
      //   attachmentname: name,
      //   attachmenturl: url,
      //   contenttype: type,
      //   createdat: new Date(),
      //   updatedat: new Date(),
      //   createdby: currentUser?.id || 0,
      //   updatedby: currentUser?.id || 0,
      // })
    } catch (error) {
      console.error(error)
    }
  }

  const handleFileUpload = (event, fieldName) => {
    const filesToUpload = convertFilesObjToArray(event.target.files) || []
    if (filesToUpload.length) {
      handleClose()
      filesToUpload.forEach((file) => {
        const currentdate = new Date()
        let timeStamp =
          currentdate.getFullYear() +
          "-" +
          (currentdate.getMonth() + 1) +
          "-" +
          currentdate.getDate() +
          "_" +
          currentdate.getHours() +
          ":" +
          currentdate.getMinutes() +
          ":" +
          currentdate.getSeconds()

        //const fileName = `${timeStamp}.${file.type.split('/')[1]}`
        const fileName = `${timeStamp}_${file.name.replace(/\s+/g, "_").toLowerCase()}`
        const subFolder = `FFA-${storeInfo.concept.replace(/\s+/g, "_")}-${storeInfo.id}`
        let objKey = `${publicRuntimeConfig.AWS_FOLDER_NAME}/${subFolder}/${fileName}`
        const params = {
          ACL: "private",
          Body: file,
          Bucket: publicRuntimeConfig.AWS_BUCKET_NAME,
          Key: objKey,
          ContentType: file.type,
        }

        myBucket
          .putObject(params)
          .on("httpUploadProgress", (evt) => {
            const calcProgress = Math.round((evt.loaded / evt.total) * 100)
            setProgress(calcProgress)
          })
          .send(async (err: any, data) => {
            if (data) {
              const url = `https://${publicRuntimeConfig.AWS_DOMAIN}/${objKey}`
              await updateAttachments(fileName, url, fieldName, file.type)
              enqueueSnackbar(`File ${fileName} Uploaded Successfully...!`, { variant: "success" })
              setProgress(0)
            }
            if (err) {
              setOpenSnack(true)
              setUploadError(err.message)
              setProgress(0)
            }
          })
      })
    }
  }

  return (
    <>
      <CloudUploadOutlined className={classes.uploadIcon} onClick={handleUploadMenu} />
      <Menu id="field-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem key={"disabled"} disabled={true}>
          {"-- Select field to upload --"}
        </MenuItem>
        {options.map((option) => (
          <MenuItem className={classes.imageUpload} key={option.name}>
            <label htmlFor={option.name} className={classes.label}>
              {option.labelforUpload}
            </label>
            <input
              id={option.name}
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={(e) => handleFileUpload(e, option.labelforUpload)}
            />
          </MenuItem>
        ))}
      </Menu>
      {progress ? <LinearWithValueLabel progress={progress} /> : <></>}
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openSnack}
        autoHideDuration={10000}
        onClose={handleCloseSnack}
      >
        <Alert severity="error">
          Something went wrong! Please contact administrator for AWS configuration settings.
          <div>Error message: {uploadError}</div>
        </Alert>
      </Snackbar>
    </>
  )
}

export default UploadMedia
