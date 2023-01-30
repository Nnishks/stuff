// ** MUI Imports
import { BlitzPage } from "@blitzjs/next"
import { Add } from "@mui/icons-material"
import { Button, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { useAppDispatch } from "app/core/hooks/reduxHooks"
import AppLayout from "app/core/layouts/AppLayout"
import { updateHeaderText } from "app/store/slices/commonSlice"

const Proposals: BlitzPage = () => {
  const dispatch = useAppDispatch()
  dispatch(updateHeaderText("Proposals"))
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<Add />}
        className="global-btn"
      >
        New Invoice
      </Button>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          coming soon...
        </Grid>
      </Grid>
    </>
  )
}

Proposals.authenticate = true
Proposals.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default Proposals
