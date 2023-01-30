// ** Types Import
import { NavLink, NavSectionTitle, VerticalNavItemsType } from "app/core/layouts/types"

// ** Custom Menu Components
import VerticalNavLink from "./VerticalNavLink"
import VerticalNavSectionTitle from "./VerticalNavSectionTitle"

interface Props {
  verticalNavItems?: VerticalNavItemsType
}

const resolveNavItemComponent = (item: NavLink | NavSectionTitle) => {
  if ((item as NavSectionTitle).sectionTitle) return VerticalNavSectionTitle
  return VerticalNavLink
}

const VerticalNavItems = (props: Props) => {
  // ** Props
  const { verticalNavItems } = props

  const RenderMenuItems = verticalNavItems?.map(
    (item: NavLink | NavSectionTitle, index: number) => {
      const TagName: any = resolveNavItemComponent(item)

      return <TagName {...props} key={index} item={item} />
    }
  )

  return <>{RenderMenuItems}</>
}

export default VerticalNavItems
