import { Box, Grid, IconButton, ToggleButton, ToggleButtonGroup, useTheme } from "@mui/material"
import makeStyles from "@mui/styles/makeStyles"
import InputBase from "@mui/material/InputBase"
import Add from "@mui/icons-material/Add"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import SearchIcon from "@mui/icons-material/Search"
import React, { useEffect, useState } from "react"

import { alpha } from "@mui/material/styles"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined"
import { Grid4x4, GridView, List, Settings, Visibility } from "@mui/icons-material"

const useStyles = makeStyles((theme) => ({
  header: {
    display: "inline-block",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "9px !important",
      paddingRight: "9px !important",
    },
  },
  searchContainer: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  search: {
    display: "inline-block",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[200],
    marginLeft: 0,
    width: "100%",
    transform: "translateY(8px)",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(),
      width: "auto",
    },
  },
  searchInputRoot: {
    color: "inherit",
    width: "100%",
    height: 32,
    fontSize: 14,
  },
  searchInput: {
    color: "#000000",
    paddingTop: theme.spacing(),
    paddingRight: theme.spacing(),
    paddingBottom: theme.spacing(),
    paddingLeft: theme.spacing(8),
  },
  searchIcon: {
    color: alpha("#000000", 0.35),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    marginLeft: 5,
  },
  container: {
    display: "flex",
    placeItems: "center",
    alignItems: "center",
    fontSize: "14",
  },
  rowCount: {
    padding: "3px",
    fontWeight: "bold",
    height: "28px",
    minWidth: "50px",
    textAlign: "center",
    marginTop: "9px",
    marginRight: "20px",
    opacity: 0.8,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}))

interface WOGridHeaderProps {
  headerConfig: {
    showExportCSV?: boolean
    clearAllFilters?: boolean
    showSearch?: boolean
    showView?: boolean
    showAdd?: boolean
    showEdit?: boolean
    showDelete?: boolean
    showSettings?: boolean
    showGridToggle?: boolean
  }
  gridApi?: any
  scenarioId?: any
  scenarioName?: any
  selectedDropdown?: string
  menuList?: any
  quickFilterText?: string
  setQuickFilterText?: (event: any) => void
  title?: string | JSX.Element
  handleViewClick?: () => void
  handleAddClick?: () => void
  handleEditClick?: () => void
  selectedRow?: any
  handleDeleteClick?: () => void
  renderAdditionalItems?: any
  renderToLeftSide?: boolean
  exportCSVName?: string
  handleEmailClick?: () => void
  handleSettingsClick?: () => void
}

const WOGridHeader: React.FC<WOGridHeaderProps> = (props: WOGridHeaderProps) => {
  const classes = useStyles()
  const [headerConfig] = useState(props?.headerConfig || {})
  const [rowsSelected, setRowsSelected] = useState(false)
  const [rowsCount, setRowsCount] = useState(0)
  const [enableEdit, setEnableEdit] = useState(false)
  const theme = useTheme()
  const {
    renderAdditionalItems,
    selectedRow,
    handleDeleteClick,
    handleEditClick,
    handleEmailClick,
    handleSettingsClick,
  } = props
  const isRowSelected = () => {
    return (
      props?.gridApi?.getSelectedRows &&
      Array.isArray(props?.gridApi?.getSelectedRows()) &&
      props?.gridApi?.getSelectedRows()?.length > 0
    )
  }
  useEffect(() => {
    if (props?.gridApi) {
      setRowsCount(props.gridApi.getDisplayedRowCount())
      props.gridApi.addEventListener("selectionChanged", () => {
        const selectedRowCount = props.gridApi.getSelectedRows()?.length
        setRowsSelected(Boolean(selectedRowCount))
        setEnableEdit(isRowSelected())
      })
    }
  }, [props?.gridApi])

  function exportCSV(): void {
    if (props.gridApi) {
      const date = new Date()
      const params = {
        fileName: `${props.exportCSVName}.csv`,
      }

      props.gridApi?.exportDataAsCsv(params)
    } else {
      console.log("Error gridApi is not present", props.gridApi)
    }
  }

  const renderExportToCsv = () => (
    <Box component="span" onClick={exportCSV}>
      <IconButton color="primary" size="large">
        <GetAppOutlinedIcon />
      </IconButton>
    </Box>
  )

  const renderView = () => (
    <Box component="span" onClick={props.handleViewClick}>
      <IconButton color="primary" size="large" disabled={!enableEdit}>
        <Visibility />
      </IconButton>
    </Box>
  )

  const renderEdit = () => {
    return (
      <Box
        component="span"
        onClick={() => {
          enableEdit && handleEditClick && handleEditClick()
        }}
      >
        <IconButton color="primary" disabled={!enableEdit} size="large">
          <EditOutlinedIcon />
        </IconButton>
      </Box>
    )
  }
  const renderDelete = () => {
    return (
      <Box
        component="span"
        onClick={() => {
          enableEdit && handleDeleteClick && handleDeleteClick()
        }}
      >
        <IconButton color="primary" disabled={!enableEdit} size="large">
          <DeleteOutlinedIcon />
        </IconButton>
      </Box>
    )
  }
  const renderSearch = () => (
    <div className={classes.searchContainer}>
      <span className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.searchInputRoot,
            input: classes.searchInput,
          }}
          onChange={(e) => props.setQuickFilterText && props.setQuickFilterText(e.target.value)}
          value={props.quickFilterText}
        />
      </span>
    </div>
  )
  const renderSettings = () => (
    <Box component="span" onClick={handleSettingsClick}>
      <IconButton color="primary" size="large">
        <Settings />
      </IconButton>
    </Box>
  )
  const renderViewToggle = () => (
    <ToggleButtonGroup
      exclusive
      value={"right"}
      size={"small"}
      color={"primary"}
      // onChange={handleAlignment}
    >
      <ToggleButton value="left" aria-label="left aligned">
        <GridView />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <List />
      </ToggleButton>
    </ToggleButtonGroup>
  )

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[300],
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex" }}>
        {headerConfig?.showSettings && renderSettings()}
        {headerConfig?.showSearch && renderSearch()}
        {headerConfig?.showView && renderView()}
        {headerConfig?.showEdit && renderEdit()}
        {headerConfig?.showDelete && renderDelete()}
        {headerConfig?.showExportCSV && renderExportToCsv()}
      </Box>
      <Box p={1}>{headerConfig?.showGridToggle && renderViewToggle()}</Box>
    </Box>
  )
}

export { WOGridHeader }
