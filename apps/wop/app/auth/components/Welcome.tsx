// @ts-nocheck
import { Box, Container, Grid, Theme, Typography, useTheme } from "@mui/material"
import { createStyles, makeStyles } from "@mui/styles"
import React from "react"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapperBox: {
      [theme.breakpoints.up("md")]: {
        paddingTop: "2rem",
      },
    },
    overlayBox: {
      transition: "all .15s ease",
      opacity: ".9",
      backgroundColor: theme.palette.secondary.lighter,
    },
    containerRoot: {
      zIndex: 1,
      textAlign: "center",
      marginLeft: "25%",
    },
    typographyRootH1: {
      color: `${theme.palette.primary.main}`,
      [theme.breakpoints.up("md")]: {
        fontSize: "2.75rem",
        fontWeight: 600,
        lineHeight: 1.5,
      },
    },
  })
)

const Welcome = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <>
      <Box
        alignItems="center"
        display="flex"
        className={classes.wrapperBox}
        minHeight="100px"
        position="relative"
        width="100%"
        height="100%"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          className={classes.overlayBox}
        />
        <Container
          display="flex"
          alignItems="center"
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <Grid container>
            <Typography variant="h3" classes={{ root: classes.typographyRootH1 }}>
              Hi, Welcome Back!
            </Typography>
            <Box mt={20}>
              <img src="/assets/images/illustration.webp" height={350} width={350} />
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Welcome
