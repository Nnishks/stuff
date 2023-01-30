import { Box, Card, CardContent, Typography } from "@mui/material"
import { createStyles, makeStyles } from "@mui/styles"
import * as React from "react"
import { hexToRGBA } from "../theme/utils/hex-to-rgba"

// styles
const useStyles = makeStyles((theme) =>
  createStyles({
    cardStyle: {
      boxShadow: theme.shadows[0],
    },
    iconHolder: {
      padding: 5,
      height: "30px",
      borderRadius: 3,
    },
    title: {
      fontWeight: 600,
      marginLeft: 10,
      lineHeight: 2.2,
      color: "black",
    },
  })
)

function CardStats(props) {
  // props
  const { title, Icon, value, iconColor, caption } = props

  // consts
  const classes = useStyles()

  return (
    <Card className={classes.cardStyle} style={{ backgroundColor: hexToRGBA(iconColor, 0.1) }}>
      <CardContent>
        <Box display={"flex"}>
          <Box className={classes.iconHolder} style={{ backgroundColor: iconColor }}>
            <Icon style={{ fontSize: 20, color: "white" }} />
          </Box>
          <Typography variant="body2" className={classes.title}>
            {title}
          </Typography>
        </Box>
        <Box fontWeight="600" fontSize={22} marginTop={2}>
          {value}
        </Box>
        <Typography
          variant="body2"
          sx={{
            opacity: 0.9,
            fontSize: 12,
          }}
        >
          {caption}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardStats
