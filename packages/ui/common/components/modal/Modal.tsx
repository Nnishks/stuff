import * as React from "react"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { Theme } from "@mui/material/styles"
import createStyles from "@mui/styles/createStyles"
import makeStyles from "@mui/styles/makeStyles"
import { Box } from "@mui/material"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    modalheader: {
      textAlign: "center",
      padding: 0,
    },
    modalActions: {
      alignSelf: "center",
      margin: "7px",
      marginTop: "40px",
      marginBottom: "0px",
    },
  })
)

export default function Modal(props) {
  const { open, handleClose, title } = props
  const classes = useStyles()

  const handleCloseModal = () => {
    handleClose()
  }

  return (
    <div>
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth="lg"
        onClose={handleCloseModal}
        aria-labelledby="max-width-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {title && (
          <DialogTitle id="max-width-dialog-title" className={classes.modalheader}>
            <h3>{title}</h3>
          </DialogTitle>
        )}
        <DialogContent dividers>{props.children}</DialogContent>
        <DialogActions className={classes.modalActions}>
          {/* <Button onClick={handleClose} variant="outlined">
          </Button> */}
          <Box m={2}></Box>
          {/* <Button type="submit" variant="contained" color="primary">
            Save
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  )
}
