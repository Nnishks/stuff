import * as React from 'react'
import { Suspense, useState } from "react"
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { PhotoLibraryOutlined } from "@mui/icons-material"
import UploadMedia from "./UploadMedia"
// import SectionImages from "./SectionImages"
import Loader from "./Loader"
import Link from "@mui/material/Link"
// import themeColors from "app/core/theme/colors"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionTitle: {
      display: "flex",
      position: "relative",
      flexDirection: "row",
      justifyContent: "space-between",
      // backgroundColor: themeColors.secondary.light,
      padding: "12px 12px 10px 20px",
      borderRadius: "5px",
      fontSize: "14px",
      fontWeight: 600,
      color: "#484747",
    },
    uploadIcon: {
      height: "20px",
      width: "20px",
      marginLeft: "20px",
      cursor: "pointer",
    },
  })
)

function SectionHeader({ sectionId, sectionName, section, currentUser, storeInfo }) {
  const [showImageModal, setShowImageModal] = useState(false)
  const showPopup = () => {
    setShowImageModal(true)
  }
  const classes = useStyles()
  return (
    <Suspense fallback={<Loader />}>
      <div className={classes.sectionTitle}>
        {section?.link ? (
          <Link
            href={section.link}
            target="_blank"
            rel="/ noreferrer"
            underline="hover"
          >
            {section.name}
          </Link>
        ) : (
          <span>{section.name}</span>
        )}

        {section.isUploadEnabled && (
          <span>
            <PhotoLibraryOutlined className={classes.uploadIcon} onClick={() => showPopup()} />
            <UploadMedia
              sectionId={sectionId}
              sectionName={sectionName}
              subSectionName={section.name}
              fields={section.fields}
              currentUser={currentUser}
              storeInfo={storeInfo}
            />
          </span>
        )}
      </div>
      {/* {showImageModal && (
        <SectionImages
          open={showImageModal}
          groupBy={"fieldname"}
          where={{
            ffasectionid: sectionId,
            subsectionname: section.name,
            isdeleted: false,
          }}
          handleImageModal={() => setShowImageModal(false)}
        />
      )} */}
    </Suspense>
  )
}

export default SectionHeader
