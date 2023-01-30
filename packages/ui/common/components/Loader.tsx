import * as React from "react"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { Box } from "@mui/material"
// import themeColors from "../theme/colors"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    loader: {
      borderRadius: "10px",
    },
  })
)

export default function Loader() {
  const classes = useStyles()

  return (
    <div>
      <Backdrop open={true} className={classes.backdrop}>
        {/* <Image
          src="/assets/loaders/servishero.gif"
          alt="NexFMx"
          className={classes.loader}
          width={100}
          height={100}
        /> */}
        <Box
          style={{
            height: "80px",
            width: "80px",
            padding: "25px",
            borderRadius: "10px",
            // backgroundColor: themeColors.secondary.light,
          }}
        >
          <CircularProgress color="primary" size={30} />
        </Box>
      </Backdrop>
    </div>
  )
}
