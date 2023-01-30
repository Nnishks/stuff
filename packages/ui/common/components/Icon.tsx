// ** React Imports
import { ReactNode } from "react"

// ** MUI Imports
import { SvgIconProps } from "@mui/material"

interface UserIconProps {
  iconProps?: SvgIconProps
  icon: string | ReactNode
}

const Icon = (props: UserIconProps) => {
  // ** Props
  const { icon, iconProps } = props

  const IconTag = icon

  let styles

  styles = {
    color: "#616161",
    fontSize: "22px",
    opacity: "0.9",
  }

  // @ts-ignore
  return <IconTag {...iconProps} style={{ ...styles }} />
}

export default Icon
