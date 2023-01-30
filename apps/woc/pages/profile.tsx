// ** MUI Imports
import { BlitzPage } from "@blitzjs/next"
import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import AppLayout from "app/core/layouts/AppLayout"

const Profile: BlitzPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Profile
        </Typography>
      </Grid>
    </Grid>
  )
}

Profile.authenticate = true
Profile.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default Profile
