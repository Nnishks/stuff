const colDefs = [
  { field: "id", headerName: "Id", width: 100 },
  { field: "name", headerName: "Name" },
  { field: "email", headerName: "Email" },
  { field: "profile", headerName: "Profile" },
  { field: "role", headerName: "Role" },
  { field: "phone", headerName: "Phone" },
  { field: "address", headerName: "Address" },
  { field: "managerName", headerName: "Manager" },
  { field: "city", headerName: "City" },
  { field: "stateorprovince", headerName: "STate/Province" },
  { field: "country", headerName: "Country" },
  { field: "postalcode", headerName: "Zip/PostalCode" },
  { field: "officephone", headerName: "Office Phone" },
  { field: "homephone", headerName: "Home Phone" },
  { field: "alternateemail", headerName: "Alternate Email" },
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
