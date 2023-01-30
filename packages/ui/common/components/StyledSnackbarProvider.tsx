import { styled } from "@mui/material"
import { SnackbarProvider } from "notistack"
const StyledSnackbarProvider = styled(SnackbarProvider)`
  &.SnackbarItem-variantError {
    background-color: #feecea;
    color: #fc5538;
  }
  ,
  &.SnackbarItem-variantSuccess {
    background-color: #edf7ed;
    color: rgba(0, 0, 0, 0.87);
    .MuiSvgIcon-root {
      color: #31bd85;
    }
  }
  ,
  &.SnackbarItem-variantWarning {
    background-color: #fdf1e6;
    color: rgba(0, 0, 0, 0.87);
    .MuiSvgIcon-root {
      color: #ff8800;
    }
  }
  ,
  &.SnackbarItem-variantInfo {
    background-color: #e4f3ff;
    .MuiSvgIcon-root {
      color: #007fff;
    }
    color: rgba(0, 0, 0, 0.87);
  }
  &.SnackbarItem-contentRoot {
    box-shadow: none;
  }
`
const snackBarIconStyle = {
  marginRight: "8px",
}
export { StyledSnackbarProvider, snackBarIconStyle }
