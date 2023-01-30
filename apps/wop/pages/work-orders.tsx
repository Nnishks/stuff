// ** MUI Imports
import { BlitzPage } from "@blitzjs/next"
import {
  AccessTimeFilled,
  Add,
  ArticleSharp,
  CheckCircle,
  InsertDriveFile,
  Notifications,
} from "@mui/icons-material"
import { Box, Button, Card, Typography } from "@mui/material"
import { createStyles, makeStyles } from "@mui/styles"
import GridTabs from "app/core/components/GridTabs"
import { useAppDispatch } from "app/core/hooks/reduxHooks"
import AppLayout from "app/core/layouts/AppLayout"
import { updateHeaderText } from "app/store/slices/commonSlice"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    progressTrackers: {
      padding: 20,
      marginTop: 20,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      overflow: "auto",
    },
    workOrderTabs: {
      overflow: "auto",
    },
  })
)

const WorkOrders: BlitzPage = () => {
  const dispatch = useAppDispatch()
  dispatch(updateHeaderText("Work Orders"))
  const stats = [
    {
      title: "All",
      count: 20,
      amount: 500,
      Icon: ArticleSharp,
      borderRight: true,
      text: "wo's",
      color: "#2065D1",
    },
    {
      title: "Open",
      count: 5,
      amount: 500,
      Icon: CheckCircle,
      borderRight: true,
      text: "wo's",
      color: "#54D62C",
    },
    {
      title: "In Progress",
      count: 8,
      amount: 500,
      Icon: AccessTimeFilled,
      borderRight: true,
      text: "wo's",
      color: "#FFC107",
    },
    {
      title: "Pending Confirmation",
      count: 4,
      amount: 500,
      Icon: Notifications,
      borderRight: true,
      text: "wo's",
      color: "#FF4842",
    },
    {
      title: "Completed",
      count: 3,
      amount: 500,
      Icon: InsertDriveFile,
      borderRight: true,
      text: "wo's",
      color: "#454F5B",
    },
    {
      title: "Invoiced",
      count: 3,
      amount: 500,
      Icon: InsertDriveFile,
      borderRight: true,
      text: "wo's",
      color: "#454F5B",
    },
    {
      title: "Org ETA Missed",
      count: 3,
      amount: 500,
      Icon: InsertDriveFile,
      borderRight: false,
      text: "wo's",
      color: "#454F5B",
    },
  ]
  const tabs = [
    {
      title: "All",
      count: 20,
      color: "#2065D1",
      data: [],
    },
    {
      title: "open",
      count: 5,
      color: "#FF4842",
    },
    {
      title: "In Progress",
      count: 8,
      color: "#FFC107",
    },
    {
      title: "Completed",
      count: 4,
      color: "#54D62C",
    },
    {
      title: "Pending Confirmation",
      count: 3,
      color: "#FFC107",
    },
    {
      title: "Invoiced",
      count: 3,
      color: "#54D62C",
    },
    {
      title: "ORG ETA Missed",
      count: 3,
      color: "#454F5B",
    },
  ]
  const classes = useStyles()
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
      {/* <Card className={classes.progressTrackers}>
        {stats.map((stat, idx) => {
          return <ProgressCard data={stat} key={idx} />
        })}
      </Card> */}
      <Card className={classes.workOrderTabs}>
        <GridTabs tabs={tabs} type={"wo"} />
      </Card>
    </>
  )
}

WorkOrders.authenticate = true
WorkOrders.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default WorkOrders
