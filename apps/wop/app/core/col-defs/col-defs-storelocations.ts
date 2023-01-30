const colDefs = [
  { field: "id", headerName: "Store ID", width: 100 },
  { field: "storename", headerName: "Store Name" },
  { field: "regioncode", headerName: "Region Code", width: 150 },
  { field: "region", headerName: "Region", width: 150 },
  { field: "facilityManagerName", headerName: "Facility Manager" },
  { field: "leadFacilityManagerName", headerName: "Lead Facility Manager" },
  { field: "address", headerName: "Address" },
  { field: "city", headerName: "City" },
  { field: "stateprovince", headerName: "State/Province" },
  { field: "country", headerName: "Country" },
  { field: "dma", headerName: "DMA" },
  { field: "status", headerName: "Status" },
  //{ field: "concept", headerName: "Concept" },
  //{ field: "company", headerName: "Company" },
  /* {
    field: "storeopendate",
    headerName: "Store Open Date",
    cellRenderer: (data) => (data.value ? new Date(data.value).toLocaleDateString() : ""),
  },*/
  {
    field: "createdat",
    headerName: "Created On",
    cellRenderer: (data) => (data.value ? new Date(data.value).toLocaleDateString() : ""),
  },
  {
    field: "updatedat",
    headerName: "Last Updated On",
    cellRenderer: (data) => (data.value ? new Date(data.value).toLocaleDateString() : ""),
  },
]

export default colDefs
