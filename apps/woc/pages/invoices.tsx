// ** MUI Imports
import { BlitzPage } from "@blitzjs/next"
import {
  AccessTime,
  AccessTimeFilled,
  ArticleSharp,
  CheckCircle,
  InsertDriveFile,
  Notifications,
} from "@mui/icons-material"
import Add from "@mui/icons-material/Add"
import { Button, Card } from "@mui/material"
import { createStyles, makeStyles } from "@mui/styles"
import {ProgressCard} from "shared-ui"
import GridTabs from "app/core/components/GridTabs"
import { useAppDispatch } from "app/core/hooks/reduxHooks"
import AppLayout from "app/core/layouts/AppLayout"
import { updateHeaderText } from "app/store/slices/commonSlice"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    progressTrackers: {
      padding: 20,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      overflow: "auto",
    },
    invoiceTabs: {
      marginTop: 20,
      overflow: "auto",
    },
  })
)

const Invoices: BlitzPage = () => {
  const dispatch = useAppDispatch()
  dispatch(updateHeaderText("Invoices"))
  const stats = [
    {
      title: "Total",
      count: 20,
      amount: 500,
      Icon: ArticleSharp,
      borderRight: true,
      text: "invoices",
      color: "#2065D1",
    },
    {
      title: "Paid",
      count: 5,
      amount: 500,
      Icon: CheckCircle,
      borderRight: true,
      text: "invoices",
      color: "#54D62C",
    },
    {
      title: "Unpaid",
      count: 8,
      amount: 500,
      Icon: AccessTimeFilled,
      borderRight: true,
      text: "invoices",
      color: "#FFC107",
    },
    {
      title: "Overdue",
      count: 4,
      amount: 500,
      Icon: Notifications,
      borderRight: true,
      text: "invoices",
      color: "#FF4842",
    },
    {
      title: "Draft",
      count: 3,
      amount: 500,
      Icon: InsertDriveFile,
      borderRight: false,
      text: "invoices",
      color: "#454F5B",
    },
  ]
  const tabs = [
    {
      title: "Total",
      count: 20,
      color: "#2065D1",
    },
    {
      title: "Paid",
      count: 5,
      color: "#54D62C",
    },
    {
      title: "Unpaid",
      count: 8,
      color: "#FFC107",
    },
    {
      title: "Overdue",
      count: 4,
      color: "#FF4842",
    },
    {
      title: "Draft",
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
        New Invoice
      </Button>

      <Card className={classes.progressTrackers}>
        {stats.map((stat, idx) => {
          return <ProgressCard data={stat} key={idx} />
        })}
      </Card>
      <Card className={classes.invoiceTabs}>
        <GridTabs tabs={tabs} type={"invoice"} />
      </Card>
    </>
  )
}

Invoices.authenticate = true
Invoices.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default Invoices
