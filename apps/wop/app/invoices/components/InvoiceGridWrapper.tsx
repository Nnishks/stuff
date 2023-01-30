import { BlitzPage, Routes } from "@blitzjs/next"
import { invalidateQuery, useMutation, useQuery } from "@blitzjs/rpc"
import { Box } from "@mui/material"
import { Skeleton } from "@mui/material"
import colDefs from "app/core/col-defs/col-defs-storelocations"
import { GridHeader , GridWrapper, Confirmation,Loader , Modal, useModal, AppConstants} from "shared-ui"
import { useAppDispatch } from "app/core/hooks/reduxHooks"
import { toggleCreateNewStore } from "app/store/slices/globalModalSlice"
import EditStoreFormWrapper from "app/storelocations/components/EditStoreFormWrapper"
import updateStorelocation from "app/storelocations/mutations/updateStorelocation"
import getStorelocations from "app/storelocations/queries/getStorelocations"
import Head from "next/head"
import { Suspense, useMemo, useState } from "react"

function InvoicesGrid(props) {
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

  return (
    <>
      <GridHeader
        headerConfig={{
          showSearch: true,
          showAdd: false,
          showEdit: true,
          showDelete: true,
          showExportCSV: true,
        }}
        title={""}
        quickFilterText={quickFilterText}
        setQuickFilterText={setQuickFilterText}
        gridApi={gridApi}
        handleDeleteClick={() => setIsDelete(true)}
        handleAddClick={props.toggleAdd}
        handleEditClick={() => props.handleEdit(gridApi?.getSelectedRows()?.[0])}
        exportCSVName={"Stores List"}
      />
      <GridWrapper
        quickFilterText={quickFilterText}
        defaultColDef={defaultColDef}
        rowSelection={"single"}
        rowData={storelocations}
        onGridReady={onGridReady}
        columnDefs={colDefs}
      />
      {isDelete && (
        <Confirmation
          openDialog={isDelete}
          message={`${AppConstants.messages.deleteConfirmation} Store ?`}
          handleNo={() => setIsDelete(false)}
          handleYes={() => handleDeleteClick()}
        />
      )}
    </>
  )
}

const InvoiceGridWrapper = (props) => {
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
        {showEdit && (
          <Modal open={showEdit} handleClose={toggleEdit} title={"Edit Store Location"}>
            <Suspense fallback={<Loader />}>
              <EditStoreFormWrapper handleClose={toggleEdit} selectedRow={selectedRow} />
            </Suspense>
          </Modal>
        )}
        <Suspense
          fallback={
            <>
              {" "}
              <Skeleton animation="wave" height={90} style={{ marginBottom: 2 }} />
              <Skeleton animation="wave" variant="rectangular" height="calc(100vh - 170px)" />
            </>
          }
        >
          <Box height="calc(100vh - 115px)">
            <InvoicesGrid toggleAdd={toggleAdd} toggleEdit={toggleEdit} handleEdit={handleEdit} />
          </Box>
          <></>
        </Suspense>
      </div>
    </>
  )
}

export default InvoiceGridWrapper
