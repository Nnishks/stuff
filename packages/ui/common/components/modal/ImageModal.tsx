import * as React from "react"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Button from "@mui/material/Button"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    modalheader: {
      textAlign: "center",
    },
    modalActions: {
      margin: "5px",
    },
  })
)

export default function ImageModal(props) {
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
        aria-describedby="scroll-dialog-description">
        {title && (
          <DialogTitle id="max-width-dialog-title" className={classes.modalheader}>
            <h1>{title}</h1>
          </DialogTitle>
        )}
        <DialogContent dividers>{props.children}</DialogContent>
        <DialogActions className={classes.modalActions}>
          <Button onClick={() => handleClose()} variant="outlined" color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
