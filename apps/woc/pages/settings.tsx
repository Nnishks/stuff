import Head from "next/head"
import { BlitzPage } from "@blitzjs/next"
import { useQuery } from "@blitzjs/rpc"
import { Suspense } from "react"
import { Box, Card, CssBaseline, Grid, Typography } from "@mui/material"
import makeStyles from "@mui/styles/makeStyles"
import createStyles from "@mui/styles/createStyles"
import React from "react"
import { Skeleton } from "@mui/material"
import { settingsSchema } from "app/admin/settings/schemas/settingsSchema"
import getSettings from "app/admin/settings/queries/getSettings"
import { useModal, Modal, Loader } from "shared-ui"
import EditSettingsFormWrapper from "app/admin/settings/components/EditSettingsFormWrapper"
import AppLayout from "app/core/layouts/AppLayout"
import { useAppDispatch } from "app/core/hooks/reduxHooks"
import { updateHeaderText } from "app/store/slices/commonSlice"
// import boxShadows from "app/core/theme/components/box-shadow"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    card: {
      padding: "30px",
      // boxShadow: boxShadows.boxShadow,
    },
    section: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    sectionTitle: {
      backgroundColor: theme.palette.secondary.light,
      padding: "12px 12px 10px 20px",
      borderRadius: "5px",
      fontSize: "15px",
      color: "",
    },
    field: {
      width: "50%",
    },
    fieldLabel: {
      fontWeight: "bold",
      color: "#777",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
    },
    saveBtn: {
      position: "absolute",
      bottom: 0,
      right: 10,
      marginBottom: "8px",
    },
  })
)

function SettingsGrid() {
  const classes = useStyles()
  const { toggle: toggleEdit, isShowing: showEdit } = useModal()
  const [{ settings }] = useQuery(getSettings, {
    orderBy: { id: "asc" },
  })
  const dispatch = useAppDispatch()
  dispatch(updateHeaderText("Settings"))
  return (
    <>
      <CssBaseline />
      {showEdit && (
        <Modal open={showEdit} handleClose={toggleEdit} title={settingsSchema.title}>
          <Suspense fallback={<Loader />}>
            <EditSettingsFormWrapper handleClose={toggleEdit} selectedRow={settings[0]} />
          </Suspense>
        </Modal>
      )}
      <Suspense
        fallback={
          <>
            {" "}
            <Skeleton animation="wave" variant="rectangular" height="calc(100vh - 240px)" />
          </>
        }
      >
        <Card className={classes.card}>
          <div className={classes.header}>
            <Box component="span">
              {/* <IconButton color="primary" onClick={toggleEdit}>
              <Edit />
            </IconButton> */}
            </Box>
          </div>
          <Box className={classes.root}>
            {settingsSchema.sections.map((section) => {
              return (
                <>
                  <Box key={section.name}>
                    <h3 className={classes.sectionTitle}>{section.name}</h3>
                    <Box className={classes.section}>
                      <Grid container spacing={1}>
                        {section.fields.map((field) => {
                          return (
                            <Grid xs={12} md={6} className={classes.field} key={field.name}>
                              <Box m={2}>
                                <Typography variant="body1">
                                  <span className={classes.fieldLabel}>{field.label}: </span>
                                  {"  "}
                                  {field.mask ? (
                                    <Typography component="span">******************</Typography>
                                  ) : (
                                    settings?.[0]?.[field.name || ""]
                                  )}
                                </Typography>
                              </Box>
                            </Grid>
                          )
                        })}
                      </Grid>
                    </Box>
                  </Box>
                </>
              )
            })}
          </Box>
        </Card>
      </Suspense>
    </>
  )
}

const SettingsPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>

      <div>
        <Suspense
          fallback={
            <>
              {" "}
              <Skeleton animation="wave" variant="rectangular" height="calc(100vh - 170px)" />
            </>
          }
        >
          <Box height="calc(100vh - 115px)">
            <SettingsGrid />
          </Box>
          <></>
        </Suspense>
      </div>
    </>
  )
}

SettingsPage.authenticate = true
SettingsPage.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default SettingsPage
