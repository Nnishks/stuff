import { Button, Menu, MenuItem, MenuProps, styled } from "@mui/material"
import { KeyboardArrowDown } from "@mui/icons-material"
// import themeColors from "app/core/theme/colors"
import * as React from "react"

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    // color: themeColors.primary.main,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "2px 0",
    },
    "& .MuiMenuItem-root": {
      "&:active": {
        // backgroundColor: themeColors.secondary.light,
      },
    },
  },
}))

export default function FilterBy(props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="customized-button"
        variant="contained"
        disableElevation
        size="small"
        onClick={handleClick}
        style={{ height: props.height }}
      >
        <span style={{ display: "flex" }}>
          {props.filterBy} <KeyboardArrowDown />
        </span>
      </Button>
      <StyledMenu
        id="customized-menu"
        MenuListProps={{
          "aria-labelledby": "customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {props.options.map((option) => (
          <MenuItem
            onClick={() => {
              props.setFilterBy(option)
              handleClose()
            }}
            disableRipple
            key={option}
          >
            {option}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  )
}
