// ** React Imports
import { ElementType, ReactNode } from "react"

// ** Next Imports
import Link from "next/link"
import { useRouter } from "next/router"

// ** MUI Imports
import ListItem from "@mui/material/ListItem"
import { alpha, styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import Box, { BoxProps } from "@mui/material/Box"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemButton, { ListItemButtonProps } from "@mui/material/ListItemButton"

// ** shared Imports
import {themeConfig} from "shared-ui"
import { Settings } from "shared-ui"
import {Icon} from "shared-ui"


// ** Types
import { NavLink } from "app/core/layouts/types"


// ** Utils
import { handleURLQueries } from "app/core/layouts/utils"

interface Props {
  item: NavLink
  settings: Settings
  navVisible?: boolean
  toggleNavVisibility: () => void
}

// ** Styled Components
const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & { component?: ElementType; target?: "_blank" | undefined }
>(({ theme }) => ({
  width: "100%",
  borderRadius: 7,
  marginLeft: 10,
  padding: theme.spacing(2.25, 3.5),
  transition: "opacity .25s ease-in-out",
  "&.active, &.active:hover": {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  },
  "&.active .MuiTypography-root, &.active .MuiSvgIcon-root": {
    color: `${theme.palette.primary.main} !important`,
  },
}))

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "opacity .25s ease-in-out",
  ...(themeConfig.menuTextTruncate && { overflow: "hidden" }),
})

const VerticalNavLink = ({ item, navVisible, toggleNavVisibility }: Props) => {
  // ** Hooks
  const router = useRouter()

  const IconTag: ReactNode = item.icon

  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true
    } else {
      return false
    }
  }

  return (
    <ListItem
      disablePadding
      className="nav-link"
      disabled={item.disabled || false}
      sx={{ mt: 1.5, px: "0 !important" }}
    >
      <Link
        passHref
        href={item.path === undefined ? "/" : `${item.path}`}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <MenuNavLink
          component={"a"}
          className={isNavLinkActive() ? "active" : ""}
          {...(item.openInNewTab ? { target: "_blank" } : null)}
          onClick={(e) => {
            if (item.path === undefined) {
              e.preventDefault()
              e.stopPropagation()
            }
            if (navVisible) {
              toggleNavVisibility()
            }
          }}
          sx={{
            pl: 5.5,
            ...(item.disabled ? { pointerEvents: "none" } : { cursor: "pointer" }),
          }}
        >
          <ListItemIcon
            sx={{
              mr: 2.5,
              color: "text.primary",
              transition: "margin .25s ease-in-out",
            }}
          >
            <Icon icon={IconTag} />
          </ListItemIcon>

          <MenuItemTextMetaWrapper>
            <Typography {...(themeConfig.menuTextTruncate && { noWrap: true })} variant="body2">
              {item.title}
            </Typography>
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </Link>
    </ListItem>
  )
}

export default VerticalNavLink
