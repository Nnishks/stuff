// ** React Import
import { ReactNode, useRef } from "react"

// ** MUI Import
import List from "@mui/material/List"
import Box, { BoxProps } from "@mui/material/Box"
import { styled, useTheme } from "@mui/material/styles"

// ** Third Party Components
import PerfectScrollbar from "react-perfect-scrollbar"

// ** Shared Imports
import { Settings, Drawer } from "shared-ui"
import { VerticalNavItemsType } from "app/core/layouts/types"

// ** Component Imports
import VerticalNavItems from "./VerticalNavItems"
import VerticalNavHeader from "./VerticalNavHeader"

// ** Util Import
import { Avatar, Typography } from "@mui/material"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

interface Props {
  hidden: boolean
  navWidth: number
  settings: Settings
  children: ReactNode
  navVisible: boolean
  toggleNavVisibility: () => void
  setNavVisible: (value: boolean) => void
  verticalNavItems?: VerticalNavItemsType
  saveSettings: (values: Settings) => void
}

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}))

const Navigation = (props: Props) => {
  // ** Props
  const { hidden } = props

  // ** States

  // ** Hooks
  const currentUser = useCurrentUser()

  // ** Fixes Navigation InfiniteScroll
  const handleInfiniteScroll = (ref: HTMLElement) => {
    if (ref) {
      // @ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect

      ref.getBoundingClientRect = () => {
        // @ts-ignore
        const original = ref._getBoundingClientRect()

        return { ...original, height: Math.floor(original.height) }
      }
    }
  }

  const ScrollWrapper = hidden ? Box : PerfectScrollbar

  return (
    <Box style={{ borderRight: "0.1px solid #7777", borderRightStyle: "dashed" }}>
      <Drawer {...props}>
        <VerticalNavHeader />
        <Box sx={{ height: "100%", position: "relative", overflow: "auto" }}>
          <Box sx={{ mb: 3, mt: 2, mx: 2.5 }}>
            <AccountStyle>
              <Avatar src={"/assets/avatars/avatar_default.jpg"} alt="photoURL" />
              <Box sx={{ ml: 2 }}>
                <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600 }}>
                  {currentUser?.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", opacity: 0.7 }}>
                  {currentUser?.role}
                </Typography>
              </Box>
            </AccountStyle>
          </Box>
          {/* @ts-ignore */}
          <ScrollWrapper containerRef={(ref: any) => handleInfiniteScroll(ref)}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <List sx={{ transition: "padding .25s ease", pr: 4.5 }}>
                <VerticalNavItems {...props} />
              </List>
            </Box>
          </ScrollWrapper>
        </Box>
      </Drawer>
    </Box>
  )
}

export default Navigation
