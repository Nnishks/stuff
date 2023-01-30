const colDefs = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Picklist Name" },
  { field: "uniquename", headerName: "UniqueName" },
  { field: "description", headerName: "Description" },
  { field: "valueName", headerName: "Picklist Value" },
  {
    field: "createdAt",
    headerName: "Created On",
    cellRenderer: (data) => (data.value ? new Date(data.value).toLocaleDateString() : ""),
  },
  {
    field: "updatedAt",
    headerName: "Last Updated On",
    cellRenderer: (data) => (data.value ? new Date(data.value).toLocaleDateString() : ""),
  },
]

export default colDefs
