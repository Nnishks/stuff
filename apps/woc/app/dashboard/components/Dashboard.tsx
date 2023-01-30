// ** MUI Imports
import { AccessTimeFilled, Add, ArticleSharp, CheckCircle, PaidOutlined } from "@mui/icons-material"
import { Box, Button, Card, CardHeader } from "@mui/material"
import Grid from "@mui/material/Grid"
import { createStyles, makeStyles } from "@mui/styles"
import {CardStats, BarChart, Donut} from "shared-ui"
import { useAppDispatch } from "app/core/hooks/reduxHooks"
import { updateHeaderText } from "app/store/slices/commonSlice"

const useStyles = makeStyles((theme) => createStyles({}))

const Dashboard = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  dispatch(updateHeaderText("Overview"))

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<Add />}
        className="global-btn"
      >
        New WO
      </Button>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <CardStats
                title={"Open"}
                Icon={ArticleSharp}
                value={"13879"}
                iconColor={"#8353E2"}
                caption={"Increased by 6 this week"}
              />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <CardStats
                title={"In Progress"}
                Icon={AccessTimeFilled}
                value={"1290"}
                iconColor={"#4169E5"}
                caption={"Decreased by 5 this week"}
              />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <CardStats
                title={"Completed"}
                Icon={CheckCircle}
                value={"3908"}
                iconColor={"#CD5E12"}
                caption={"Increased by 7 this week"}
              />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <CardStats
                title={"Invoiced"}
                Icon={PaidOutlined}
                value={"3908"}
                iconColor={"#01BDD6"}
                caption={"Completion rate: 80%"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={9}>
          <Card sx={{ padding: 5 }}>
            <Box
              sx={{
                fontWeight: 600,
                marginLeft: 5,
                fontSize: 18,
              }}
            >
              Work Orders
            </Box>
            <CardHeader subheader="Work Orders by priority" style={{ marginTop: "-10px" }} />
            <BarChart />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ padding: 5 }}>
            <Donut />
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

Dashboard.authenticate = true
export default Dashboard
