// ** Type Imports
import { alpha, PaletteMode } from "@mui/material"
import { ThemeColor } from "../types"

const DefaultPalette = (mode: PaletteMode, themeColor: ThemeColor) => {
  // ** Vars
  const lightColor = "58, 53, 65"
  const darkColor = "231, 227, 252"
  const mainColor = mode === "light" ? lightColor : darkColor

  const primaryGradient = () => {
    if (themeColor === "primary") {
      return "#C6A7FE"
    } else if (themeColor === "secondary") {
      return "#9C9FA4"
    } else if (themeColor === "success") {
      return "#93DD5C"
    } else if (themeColor === "error") {
      return "#FF8C90"
    } else if (themeColor === "warning") {
      return "#FFCF5C"
    } else {
      return "#6ACDFF"
    }
  }

  return {
    customColors: {
      main: mainColor,
      primaryGradient: primaryGradient(),
      tableHeaderBg: mode === "light" ? "#F9FAFC" : "#3D3759",
    },
    common: {
      black: "#000",
      white: "#FFF",
    },
    mode: mode,
    primary: {
      lighter: "#D1E9FC",
      light: "#76B0F1",
      main: "#2065D1",
      dark: "#103996",
      darker: "#061B64",
      contrastText: "#fff",
    },
    secondary: {
      lighter: "#D6E4FF",
      light: "#84A9FF",
      main: "#3366FF",
      dark: "#1939B7",
      darker: "#091A7A",
      contrastText: "#FFF",
    },
    success: {
      lighter: "#E9FCD4",
      light: "#AAF27F",
      main: "#54D62C",
      dark: "#229A16",
      darker: "#08660D",
      contrastText: "#212B36",
    },
    error: {
      lighter: "#FFE7D9",
      light: "#FFA48D",
      main: "#FF4842",
      dark: "#B72136",
      darker: "#7A0C2E",
      contrastText: "#fff",
    },
    warning: {
      lighter: "#FFF7CD",
      light: "#FFE16A",
      main: "#FFC107",
      dark: "#B78103",
      darker: "#7A4F01",
      contrastText: "#212B36",
    },
    info: {
      lighter: "#D0F2FF",
      light: "#74CAFF",
      main: "#1890FF",
      dark: "#0C53B7",
      darker: "#04297A",
      contrastText: "#fff",
    },
    grey: {
      0: "#FFFFFF",
      100: "#F9FAFB",
      200: "#F4F6F8",
      300: "#DFE3E8",
      400: "#C4CDD5",
      500: "#919EAB",
      600: "#637381",
      700: "#454F5B",
      800: "#212B36",
      900: "#161C24",
      500_8: alpha("#919EAB", 0.08),
      500_12: alpha("#919EAB", 0.12),
      500_16: alpha("#919EAB", 0.16),
      500_24: alpha("#919EAB", 0.24),
      500_32: alpha("#919EAB", 0.32),
      500_48: alpha("#919EAB", 0.48),
      500_56: alpha("#919EAB", 0.56),
      500_80: alpha("#919EAB", 0.8),
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.68)`,
      disabled: `rgba(${mainColor}, 0.38)`,
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === "light" ? "#FFF" : "#312D4B",
      default: mode === "light" ? "#FFF" : "#28243D",
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.3)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`,
    },
  }
}

export default DefaultPalette
