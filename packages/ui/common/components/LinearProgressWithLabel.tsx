import { Box, LinearProgress, Theme, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import * as React from "react"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    bar: {
      height: "4px",
      marginTop: "4px",
    },
    typoGraphy: {
      marginTop: "-0.1rem",
      fontSize: "9.5px",
    },
  })
)

export default function LinearWithValueLabel(props) {
  const classes = useStyles()
  return (
    <Box sx={{ width: "100%", position: "absolute", left: 0 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" value={props.progress} className={classes.bar} />
        </Box>
        <Box sx={{ minWidth: 30 }}>
          <Typography
            variant="body2"
            className={classes.typoGraphy}
          >{`${props.progress}%`}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
