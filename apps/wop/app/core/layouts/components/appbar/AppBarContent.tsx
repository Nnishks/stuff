// ** MUI Imports
import Box from "@mui/material/Box"
import { Theme } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import IconButton from "@mui/material/IconButton"
import useMediaQuery from "@mui/material/useMediaQuery"
import InputAdornment from "@mui/material/InputAdornment"

// ** Icons Imports
import Menu from "mdi-material-ui/Menu"

// ** Shared Imports
import { Settings } from "shared-ui"
import { ModeToggler } from "shared-ui"

// ** Components
import UserDropdown from "app/core/layouts/components/UserDropdown"
import NotificationDropdown from "app/core/layouts/components/NotificationDropdown"
import { Typography } from "@mui/material"
import { useAppSelector } from "app/core/hooks/reduxHooks"
import { getHeaderText } from "app/store/slices/commonSlice"

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"))
  const headerText = useAppSelector(getHeaderText)

  return (
    <Box
      sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}
    >
      <Box className="actions-left" sx={{ mr: 2, display: "flex", alignItems: "center" }}>
        {hidden ? (
          <IconButton
            color="inherit"
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}
        <Typography variant="h5" fontWeight={"600"}>
          {headerText}
        </Typography>
      </Box>
      <Box className="actions-right" sx={{ display: "flex", alignItems: "center" }}>
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <NotificationDropdown />
        <UserDropdown />
      </Box>
    </Box>
  )
}

export default AppBarContent
