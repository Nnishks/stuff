import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import { BlitzPage, Routes } from "@blitzjs/next"
import { invalidateQuery, useMutation, useQuery } from "@blitzjs/rpc"
import { Box, Grid } from "@mui/material"
import { Skeleton } from "@mui/material"
import { CsvExportModule } from "ag-grid-community"
import { AgGridReact } from "ag-grid-react"
import colDefs from "app/core/col-defs/col-defs-work-orders"
import { useAppDispatch } from "app/core/hooks/reduxHooks"
import {useModal} from "shared-ui"
import { toggleCreateNewStore } from "app/store/slices/globalModalSlice"
import updateStorelocation from "app/storelocations/mutations/updateStorelocation"
import getStorelocations from "app/storelocations/queries/getStorelocations"
import Head from "next/head"
import { Suspense, useMemo, useState } from "react"
import SplitPane from "react-split-pane"
import WODetail from "./WODetail"
import WOFilters from "./WOFilters"
import { WOGridHeader } from "./WOGridheader"

function WorkOrderGrid(props) {
  const [quickFilterText, setQuickFilterText] = useState("")
  const [updateStorelocationMutation] = useMutation(updateStorelocation)

  const [gridApi, setGridApi] = useState<any>(null)
  const [gridColumnApi, setGridColumnApi] = useState(null)
  const [{ storelocations }] = useQuery(getStorelocations, {
    orderBy: { id: "asc" },
  })

  const onGridReady = (params) => {
    setGridApi(params.api)
    setGridColumnApi(params.columnApi)
  }

  // never changes, so we can use useMemo
  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
    }),
    []
  )

  const handleDeleteClick = async () => {
    const selectRow = gridApi?.getSelectedRows()?.[0]
    await updateStorelocationMutation({
      ...selectRow,
      isdeleted: true,
      updatedat: new Date(),
    })
    setIsDelete(false)
    //@ts-ignore
    await invalidateQuery(getStorelocations, {})
  }

  const [isDelete, setIsDelete] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)

  const modules = useMemo(() => [ClientSideRowModelModule, CsvExportModule], [])

  return (
    <>
      <WOGridHeader
        headerConfig={{
          showSearch: true,
          showSettings: true,
          showEdit: true,
          showDelete: true,
          showExportCSV: true,
          showGridToggle: true,
        }}
        title={"Picklists"}
        quickFilterText={quickFilterText}
        setQuickFilterText={setQuickFilterText}
        gridApi={gridApi}
        handleDeleteClick={() => setIsDelete(true)}
        handleAddClick={props.toggleAdd}
        handleSettingsClick={() => setOpenSettings(!openSettings)}
        handleEditClick={() => props.handleEdit(gridApi?.getSelectedRows()?.[0])}
        exportCSVName={"Picklists"}
      />
      <Box display={"flex"} height={"100%"} overflow={"auto"}>
        {openSettings && (
          <Box width={200} borderRight={"1px solid #C4CDD5"}>
            <WOFilters />
          </Box>
        )}
        {/* @ts-ignore */}
        <SplitPane
          split="vertical"
          minSize={200}
          defaultSize={"45%"}
          style={{ position: "relative", height: "90%" }}
        >
          <AgGridReact
            style={{ height: "100px" }}
            reactUi="true"
            className="ag-theme-material"
            animateRows="true"
            modules={modules}
            quickFilterText={quickFilterText}
            defaultColDef={defaultColDef}
            rowSelection={"single"}
            rowData={storelocations}
            onGridReady={onGridReady}
            headerHeight={1}
            columnDefs={colDefs}
            rowHeight={100}
            {...props}
          />
          <Box p={2}>
            <WODetail />
          </Box>
        </SplitPane>
      </Box>
    </>
  )
}

const WorkOrderGridWrapper = (props) => {
  const dispatch = useAppDispatch()
  const { toggle: toggleEdit, isShowing: showEdit } = useModal()
  const [selectedRow, setSelectedRow] = useState([0])
  const handleEdit = (data) => {
    toggleEdit()
    setSelectedRow(data)
  }
  const toggleAdd = async () => {
    dispatch(toggleCreateNewStore())
  }
  return (
    <>
      <Head>
        <title>Store Locations</title>
      </Head>
      <div>
        <Suspense
          fallback={
            <>
              {" "}
              <Skeleton animation="wave" height={90} style={{ marginBottom: 2 }} />
              <Skeleton animation="wave" variant="rectangular" height="calc(100vh - 170px)" />
            </>
          }
        >
          <Box height="calc(100vh - 200px)">
            <WorkOrderGrid toggleAdd={toggleAdd} toggleEdit={toggleEdit} handleEdit={handleEdit} />
          </Box>
          <></>
        </Suspense>
      </div>
      <style global jsx>{`
        .ag-cell,
        .ag-center-cols-container {
          height: 100% !important;
          width: 100% !important;
          display: inline-block !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
          line-height: normal !important;
        }
      `}</style>
    </>
  )
}

export default WorkOrderGridWrapper
