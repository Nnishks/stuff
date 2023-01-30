import WorkOrderRow from "app/workorders/components/WorkOrderRow"

const colDefs = [
  {
    field: "name",
    headerName: "",
    cellRendererFramework: WorkOrderRow,
    supressMenu: true,
  },
  {
    field: "createdat",
    headerName: "Created On",
    cellRenderer: (data) => (data.value ? new Date(data.value).toLocaleDateString() : ""),
    hide: true,
  },
  {
    field: "updatedat",
    headerName: "Last Updated On",
    cellRenderer: (data) => (data.value ? new Date(data.value).toLocaleDateString() : ""),
    hide: true,
  },
]

export default colDefs
