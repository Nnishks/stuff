import React, { useState } from "react"
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { Button, FormControlLabel, Menu, MenuItem, Radio, RadioGroup } from "@mui/material"
import { useSnackbar } from "notistack"
import moment from "moment"
import { CalendarTodayTwoTone } from "@mui/icons-material"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    resetApplyBtn: {
      width: "160px",
      padding: "10px",
      justifyContent: "space-between",
      display: "flex",
      marginTop: "20px",
      marginLeft: "100px",
    },
    customDate: {
      marginTop: "-25px",
      marginLeft: "40px",
    },

    dateInput: {
      fontSize: "10px",
    },
    formControlLabel: {
      fontSize: "13px !important",
    },
  })
)

export default function DateFilters({ heading, updateDate, updatedDate, dateRangeValues }) {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const getDateLabel = ({ startDate, endDate }) =>
    `${moment(startDate).format("MM/DD/YYYY")} to ${moment(endDate).format("MM/DD/YYYY")}`
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const [isCustomDate, setIsCustomDate] = useState(false)
  const handleClose = () => {
    setAnchorEl(null)
  }
  const [activeDate, setActiveDate] = useState({
    startDate: moment().subtract(24, "months").format("YYYY-MM-DD"),
    endDate: moment().format("YYYY-MM-DD"),
    rangeKey: "last24months",
  })
  const handleRadioBtnChange = (e) => {
    const curr = new Date()
    const first = curr.getDate() - curr.getDay() - 6
    switch (e.target.value) {
      case "lastweek":
        const lastWeek = {
          startDate: moment().startOf("week").subtract(7, "days").format("YYYY-MM-DD"),
          endDate: moment().endOf("week").subtract(7, "days").format("YYYY-MM-DD"),
          rangeKey: "lastweek",
        }
        setIsCustomDate(false)
        setActiveDate(lastWeek)
        break
      case "last2weeks":
        const lastTwoWeeks = {
          startDate: moment().startOf("week").subtract(14, "days").format("YYYY-MM-DD"),
          endDate: moment().startOf("week").subtract(1, "days").format("YYYY-MM-DD"),
          rangeKey: "last2weeks",
        }
        setIsCustomDate(false)
        setActiveDate(lastTwoWeeks)
        break
      case "lastmonth":
        const lastMonth = {
          startDate: moment().subtract(1, "months").startOf("month").format("YYYY-MM-DD"),
          endDate: moment().startOf("month").subtract(1, "days").format("YYYY-MM-DD"),
          rangeKey: "lastmonth",
        }
        setIsCustomDate(false)
        setActiveDate(lastMonth)
        break
      case "last3months":
        const last3Months = {
          startDate: moment().subtract(3, "months").startOf("month").format("YYYY-MM-DD"),
          endDate: moment().startOf("month").subtract(1, "days").format("YYYY-MM-DD"),
          rangeKey: "last3months",
        }
        setIsCustomDate(false)
        setActiveDate(last3Months)
        break
      case "last6months":
        const last6Months = {
          startDate: moment().subtract(6, "months").startOf("month").format("YYYY-MM-DD"),
          endDate: moment().startOf("month").subtract(1, "days").format("YYYY-MM-DD"),
          rangeKey: "last6months",
        }
        setIsCustomDate(false)
        setActiveDate(last6Months)
        break
      case "last12months":
        const last12Months = {
          startDate: moment().subtract(12, "months").format("YYYY-MM-DD"),
          endDate: moment().format("YYYY-MM-DD"),
          rangeKey: "last12months",
        }
        setIsCustomDate(false)
        setActiveDate(last12Months)
        break
      case "last24months":
        const last24Months = {
          startDate: moment().subtract(24, "months").format("YYYY-MM-DD"),
          endDate: moment().format("YYYY-MM-DD"),
          rangeKey: "last24months",
        }
        setIsCustomDate(false)
        setActiveDate(last24Months)
        break
      // case "thisyear":
      //   const thisYear = {
      //     startDate: moment().startOf("year").format("YYYY-MM-DD"),
      //     endDate: moment().format("YYYY-MM-DD"),
      //     rangeKey: "thisyear",
      //   }
      //   setIsCustomDate(false)
      //   setActiveDate(thisYear)
      //   break
      // case "lastyear":
      //   const lastYear = {
      //     startDate: moment().subtract(1, "years").startOf("year").format("YYYY-MM-DD"),
      //     endDate: moment().startOf("year").format("YYYY-MM-DD"),
      //     rangeKey: "lastyear",
      //   }
      //   setIsCustomDate(false)
      //   setActiveDate(lastYear)
      //   break
      case "custom":
        setIsCustomDate(true)
        setActiveDate({
          startDate: "",
          endDate: "",
          rangeKey: "custom",
        })
        break
      default:
        break
    }
  }
  const resetDateFilter = () => {
    setAnchorEl(null)
    const date = {
      startDate: moment().subtract(24, "months").format("YYYY-MM-DD"),
      endDate: moment().format("YYYY-MM-DD"),
      rangeKey: "last24months",
    }
    updateDate(date)
    setActiveDate(date)
    setIsCustomDate(false)
  }
  const applyDateFilter = () => {
    if (activeDate.startDate && activeDate.endDate) {
      setAnchorEl(null)
      updateDate(activeDate)
    } else {
      enqueueSnackbar("Start date or End date is missing!")
    }
  }
  const handleStartDateChange = (e) => {
    setActiveDate({
      ...activeDate,
      startDate: e.target.value,
      rangeKey: "custom",
    })
  }
  const handleEndDateChange = (e) => {
    setActiveDate({
      ...activeDate,
      endDate: e.target.value,
      rangeKey: "custom",
    })
  }
  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        id="date-button"
        aria-controls="date-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        style={{ width: "100%", fontSize: "13px" }}
        onClick={handleClick}
        startIcon={<CalendarTodayTwoTone style={{ paddingTop: "8px" }} />}
      >
        {getDateLabel(updatedDate)}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // style={{ marginTop: "110px" }}
        //anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        keepMounted
        //transformOrigin={{ vertical: "bottom", horizontal: "right" }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div>
          <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "14px" }}>{heading}</div>
          <RadioGroup
            aria-label="daterange"
            defaultValue={"last24months"}
            value={activeDate.rangeKey}
            name="radio-date-range"
            onChange={(e) => handleRadioBtnChange(e)}
          >
            {dateRangeValues.map((range) => (
              <MenuItem key={range.value} style={{ height: "30px", fontSize: "12px !!important" }}>
                <FormControlLabel
                  className={classes.formControlLabel}
                  value={range.value}
                  control={<Radio />}
                  label={<div className={classes.formControlLabel}>{range.label}</div>}
                />
              </MenuItem>
            ))}
          </RadioGroup>
          {isCustomDate && (
            <div className={classes.customDate}>
              <div>
                <span style={{ fontSize: "10px" }}>Start Date: </span>
                <input
                  type="date"
                  placeholder="YYYY-MM-DD"
                  className={classes.dateInput}
                  onChange={handleStartDateChange}
                />
              </div>
              <div style={{ marginTop: "3px" }}>
                <span style={{ fontSize: "10px" }}>End Date:&nbsp;&nbsp;</span>
                <input
                  type="date"
                  placeholder="YYYY-MM-DD"
                  className={classes.dateInput}
                  onChange={handleEndDateChange}
                />
              </div>
            </div>
          )}
        </div>
        <div className={classes.resetApplyBtn}>
          <Button
            onClick={() => resetDateFilter()}
            variant="outlined"
            color="secondary"
            size="small"
          >
            Reset
          </Button>
          <Button
            onClick={() => applyDateFilter()}
            variant="contained"
            color="primary"
            size="small"
          >
            Apply
          </Button>
        </div>
      </Menu>
    </div>
  )
}
