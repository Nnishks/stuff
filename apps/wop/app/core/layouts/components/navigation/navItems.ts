//@ts-nocheck
//TODO
import {
  AssignmentOutlined,
  CardMembershipOutlined,
  ConstructionOutlined,
  DocumentScanner,
  FeedbackOutlined,
  GroupAddOutlined,
  HomeRepairService,
  ListOutlined,
  PendingActionsOutlined,
  PeopleOutlineOutlined,
  PieChart,
  Settings,
  StoreOutlined,
} from "@mui/icons-material"

// ** Type import
import { VerticalNavItemsType } from "app/core/layouts/types"

import { BlitzPage, Routes } from "@blitzjs/next"

const navItems = (): VerticalNavItemsType => {
  return [
    {
      title: "Dashboard",
      icon: PieChart,
      path: "/",
    },
    {
      title: "Work Orders",
      icon: HomeRepairService,
      path: "/work-orders",
    },
    {
      title: "Invoices",
      icon: AssignmentOutlined,
      path: "/invoices",
    },
    {
      title: "Proposals",
      icon: PendingActionsOutlined,
      path: "/proposals",
    },
    {
      title: "Stores",
      icon: StoreOutlined,
      path: Routes.StorelocationsPage().pathname,
      // permissions: urlAndRolesObj[Routes.StorelocationsPage().pathname],
    },
    {
      title: "Asset Catalog",
      icon: ConstructionOutlined,
      path: "/asset-catalog",
    },
    {
      title: "Score Card",
      icon: CardMembershipOutlined,
      path: "/scorecard",
    },
    {
      sectionTitle: "ADMIN",
    },
    {
      title: "Users",
      icon: PeopleOutlineOutlined,
      path: Routes.UsersPage().pathname,
      openInNewTab: false,
    },
    {
      title: "Roles",
      icon: GroupAddOutlined,
      path: Routes.RolesPage().pathname,
      openInNewTab: false,
    },
    {
      title: "Settings",
      icon: Settings,
      path: Routes.SettingsPage().pathname,
      openInNewTab: false,
    },
    {
      title: "Pick Lists",
      icon: ListOutlined,
      path: Routes.PicklistsPage().pathname,
      openInNewTab: false,
    },
    {
      sectionTitle: "REPORTING",
    },
    {
      title: "Work Orders",
      icon: DocumentScanner,
      path: "/wo-reports",
      openInNewTab: false,
    },
    {
      title: "Proposals",
      icon: ListOutlined,
      path: "/pp-reports",
      openInNewTab: false,
    },
    {
      sectionTitle: "Help",
    },
    {
      title: "Feedback",
      icon: FeedbackOutlined,
      path: Routes.Feedback().pathname,
      openInNewTab: false,
    },
  ]
}

export default navItems
