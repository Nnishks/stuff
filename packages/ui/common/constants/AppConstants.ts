//*** */Make changes to this file with caution***
export const AppConstants = {
  fieldTypes: {
    text: "text",
    textField: "textfield",
    number: "number",
    checkbox: "checkbox",
    radio: "radio",
    date: "date",
    address: "address",
    search: "search",
    divider: "divider",
    searchUnmerged: "search_unmerged",
    searchUnmergedWithTrigger: "search_unmerged_with_trigger",
    dropdownWithDBSource: "dropdownWithDBSource",
    dropdownWithDBSourceUnMerged: "dropdownWithDBSourceUnMerged",
    dropdownWithStaticData: "dropdownWithStaticData",
    searchWithImage: "searchWithImage",
    dropdownWithStaticImage: "dropdownWithStaticImage",
    autoCompleteWithImageDifferentSource: "autoCompleteWithImageDifferentSource",
    s3Upload: "s3Upload",
  },

  //Used in FFA Survey Section fields
  defaultDropdownWithImageValues: ["Not on the List (Upload photo)", "N/A"],

  //Used in FFA Survey Section fields
  confirmationDropdownValues: ["Yes", "No"],

  messages: {
    deleteConfirmation: "Are you sure you want to delete this ",
    closeModalConfirmation: "Are you sure you want to close, All the unsaved changes will be lost.",
  },

  //Used in FFA Survey Section fields
  TakePhotoUploadDropDown: ["Photo Uploaded"],

  //Used in FFA Survey Section fields
  TakePhotoUploadDropDownWithNAOption: ["Photo Uploaded", "N/A"],

  //Used in FFA Survey Section fields
  TakePhotoUploadDropDownForArtworkMural: ["Photo Uploaded", "N/A(Store don't have Mural)"],

  //Used in FFA Survey Section fields
  CokePepsiValues: ["Coke", "Pepsi"],

  // Trackers
  punchListWalkThroughOptions: ["In-Person", "Virtual"],
  fmTrainingTypes: ["Virtual Training", "Live Training", "Hybrid Training"],

  PROFILES: {
    ADMIN: "admin",
    MANAGER: "manager", //default for now or change in create role.ts
    DIRECTOR: "director",
    SENIOR_MANAGER: "senior manager",
    REPORTS_VIEWER: "reports viewer", // todo refactor this role when moving to role based view management
    TRACKERS_CREATOR: "trackers creator",
  },
  profileValues: [
    "admin",
    "manager",
    "director",
    "senior manager",
    "reports viewer",
    "trackers creator",
  ],
  //Used in FFA Survey Section fields
  RiceCabinetHingeLocation: ["Left", "Right"],

  // Date Ranges for dashboard
  DATE_RANGE: [
    {
      label: "Last Week",
      value: "lastweek",
    },
    {
      label: "Last 2 Weeks",
      value: "last2weeks",
    },
    {
      label: "Last Month",
      value: "lastmonth",
    },
    {
      label: "Last 3 Months",
      value: "last3months",
    },
    {
      label: "Last 6 Months",
      value: "last6months",
    },
    {
      label: "Last 12 Months",
      value: "last12months",
    },
    {
      label: "Last 24 Months",
      value: "last24months",
    },
    {
      label: "Custom",
      value: "custom",
    },
  ],
  SURVEY_SECTIONS: ["Exterior", "Dining Room", "Furniture", "Tile", "Kitchen", "BOH", "Drive-Thru"],
  REPORT_TYPE: {
    SURVEY_REPORT: "SURVEY_REPORT",
    STATUS_REPORT: "STATUS_REPORT",
  },
  SURVEY_REPORTS: [
    { name: "Data Report", value: "SURVEY_REPORT" },
    { name: "Status Report", value: "STATUS_REPORT" },
    { name: "Analytics", value: "CAPEX_PLANNING" },
    { name: "Gallery", value: "DOWNLOAD_PICTURES" },
    // { name: "Pre-NexFMx FFA Survey Status Report(XLS Surveys)", value: "STATIC_REPORT" },
  ],
  TRACKER_REPORTS: [
    { name: "New Store Turn Over", value: "NSTT" },
    { name: "FM Training", value: "FMTT" },
  ],
  SURVEY_STATUS: [
    { name: "All", value: "all" },
    { name: "Completed - All", value: "completed_all" },
    { name: "Completed - NexFMx", value: "completed_nexfmx" },
    { name: "Completed - Outside NexFMx", value: "completed_outside" },
    { name: "In Progress", value: "in_progress" },
    { name: "Completed - Remodel/Refresh", value: "completed_refreshed" },
    { name: "Completed - Updated", value: "completed_updated" },
    { name: "Completed - Audited", value: "completed_audited" },
  ],
  COMPLETED_STATUS: [
    "Completed",
    "Completed - Outside NexFMx",
    "Completed - Remodel/Refresh",
    "Completed - Updated",
    "Completed - Audited",
  ],
  PRIMARY_TRAINER_TYPE: [
    {
      name: "Facility Manager",
      value: "facilitymanager",
    },
    {
      name: "Vendor",
      value: "vendor",
    },
    {
      name: "Ops",
      value: "ops",
    },
    {
      name: "Other",
      value: "other",
    },
  ],
}
