const colDefs = [
  { field: "id", headerName: "Id", width: 100 },
  // { field: "roleId", headerName: "Profile" },
  { field: "name", headerName: "Role Name" },
  { field: "description", headerName: "Description" },
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
