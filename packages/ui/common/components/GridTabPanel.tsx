import { Box } from "@mui/material"
import * as React from "react"

interface GridTabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export default function GridTabPanel(props: GridTabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`grid-tabpanel-${index}`}
      aria-labelledby={`grid-tab-${index}`}
      {...other}
    >
      {/* @ts-ignore */}
      {value === index && <Box>{children}</Box>}
    </div>
  )
}
