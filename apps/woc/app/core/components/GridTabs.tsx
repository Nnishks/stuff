import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { Typography, useTheme } from "@mui/material"
import WOGridWrapper from "app/workorders/components/WOGridWrapper"
import InvoiceGridWrapper from "app/invoices/components/InvoiceGridWrapper"
import {GridTabPanel, hexToRGBA} from "shared-ui"


interface GridTabProps {
  tabs: Array<Object>
  type: String
}

export default function GridTabs(props: GridTabProps) {
  const { tabs = [], type } = props
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue)
    setValue(newValue)
  }
  const theme = useTheme()

  const getLabel = (tab) => {
    return (
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            height: 25,
            width: 25,
            backgroundColor: hexToRGBA(tab.color, 0.15),
            borderRadius: 1,
            textAlign: "center",
          }}
        >
          <Typography variant="subtitle2" mt={0.5} color={tab.color} fontWeight={600} fontSize={13}>
            {tab.count}
          </Typography>
        </Box>
        <Typography
          variant="subtitle2"
          sx={{ textTransform: "capitalize", margin: 1, fontWeight: 600 }}
        >
          {tab.title}
        </Typography>
      </Box>
    )
  }

  const getPanel = (tab) => {
    switch (type) {
      case "wo":
        return <WOGridWrapper data={tab.data} />
      case "invoice":
        return <InvoiceGridWrapper data={tab.data} />
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          variant="scrollable"
          allowScrollButtonsMobile
          value={value}
          onChange={handleChange}
          sx={{
            backgroundColor: theme.palette.grey[200],
          }}
        >
          {tabs.map((tab, idx) => {
            return <Tab key={idx} label={getLabel(tab)} value={idx} />
          })}
        </Tabs>
      </Box>
      {tabs.map((tab, idx) => {
        return (
          <GridTabPanel value={value} key={idx} index={idx}>
            {getPanel(tab)}
          </GridTabPanel>
        )
      })}
    </Box>
  )
}
