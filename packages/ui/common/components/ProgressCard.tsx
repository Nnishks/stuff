import { Box, Card, CardContent, CircularProgress, Grid, Typography, useTheme } from "@mui/material"
import { createStyles, makeStyles } from "@mui/styles"
import * as React from "react"
import CustomCircularProgress from "./CustomCircularProgress"

interface Props {
  data: any
}
// styles
const useStyles = makeStyles((theme) =>
  createStyles({
    progressCard: {
      display: "flex",
      flexDirection: "row",
      minWidth: "190px !important",
      [theme.breakpoints.down("sm")]: {
        marginRight: 30,
      },
    },
  })
)

function ProgressCard(props: Props) {
  // props
  const { title, count, amount, borderRight, Icon, text, color } = props.data

  // consts
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Box
      className={classes.progressCard}
      style={borderRight ? { borderRight: "0.7px solid #777", borderRightStyle: "dashed" } : {}}
    >
      <Box mt={4}>
        <Box position="relative" display="inline-flex">
          <CustomCircularProgress
            variant="determinate"
            value={count}
            thickness={4}
            size={60}
            color={color}
          />
          <Box
            top={0}
            left={0}
            bottom={5}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon style={{ fontSize: 22, opacity: 0.9, color: color }} />
          </Box>
        </Box>
      </Box>
      <Box ml={5}>
        <Typography variant="body1" fontWeight={"600"}>
          {title}
        </Typography>
        <Box display={"flex"} mt={1} mb={1}>
          <Typography variant="body2" fontWeight={"600"}>
            {count}
          </Typography>
          <Typography ml={1} variant="subtitle2">
            {text}
          </Typography>
        </Box>

        <Typography variant="body2" fontWeight={"600"} color={color}>
          ${amount}
        </Typography>
      </Box>
    </Box>
  )
}

export default ProgressCard
