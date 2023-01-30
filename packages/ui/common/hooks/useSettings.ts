import { useContext } from "react"
import { SettingsContext, SettingsContextValue } from "shared-ui"

export const useSettings = (): SettingsContextValue => useContext(SettingsContext)
