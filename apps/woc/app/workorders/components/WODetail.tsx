// ** MUI Imports
import { Box, Theme, Typography, useTheme } from "@mui/material"
import { createStyles, makeStyles } from "@mui/styles"
import { hexToRGBA } from "shared-ui"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wordOrder: {
      padding: 10,
      cursor: "pointer",
    },
    title: {
      maxWidth: "82%",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      display: "inline-block",
      overflow: "hidden",
    },
    status: {
      width: 100,
      padding: "4px",
      backgroundColor: hexToRGBA("#FF4842", 0.1),
      color: "#FF4842",
      textAlign: "center",
      fontSize: "10px",
    },
  })
)

const WODetail = () => {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <Box className={classes.wordOrder}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="caption"
          color={theme.palette.primary.main}
          className={classes.title}
          title={"Imterier/Exterier Door: Miss Alignment in Door"}
        >
          <b>Imterier/Exterier Door: Miss Alignment in Door</b>
        </Typography>
        <Typography variant="caption" component={"div"}>
          21/12/2022
        </Typography>
      </Box>
      <Typography
        component={"p"}
        sx={{
          whiteSpace: "normal",
          lineHeight: "16px",
          marginTop: "5px",
          marginBottom: "5px",
          fontSize: "11px",
          color: "#454F5B",
          opacity: "0.6",
        }}
      >
        Although such encapsulation is desirable for application-level components like FeedStory or
        Comment is desirable for application-level such encapsulation is desirable for...
      </Typography>
    </Box>
  )
}

export default WODetail
