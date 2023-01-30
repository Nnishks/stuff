import Head from "next/head"
import { BlitzPage, Routes } from "@blitzjs/next"
import { useQuery, invalidateQuery, useMutation } from "@blitzjs/rpc"
import { Suspense } from "react"
import { Box } from "@mui/material"
import React, { useMemo, useState } from "react"
import { GridWrapper } from "app/core/components/aggrid/GridWrapper"
import { GridHeader } from "app/core/components/aggrid/GridHeader"
import Modal from "app/core/components/modal/Modal"
import { useDispatch } from "react-redux"
import useModal from "app/core/hooks/useModal"
import { Skeleton } from "@mui/material"
import Loader from "app/core/components/Loader"
import updatePicklist from "app/admin/picklists/mutations/updatePicklist"
import { picklistFormSchema } from "app/admin/picklists/schemas/picklistFormSchema"
import NewPicklistFormWrapper from "app/admin/picklists/components/NewPicklistFormWrapper"
import EditPicklistFormWrapper from "app/admin/picklists/components/EditPicklistFormWrapper"
import getPicklists from "app/admin/picklists/queries/getPicklists"
import Confirmation from "app/core/components/common/Confirmation"
import { AppConstants } from "app/core/constants/AppConstants"
import AppLayout from "app/core/layouts/AppLayout"
import colDefs from "app/core/col-defs/col-defs-picklists"

function PicklistsGrid(props) {
  const [quickFilterText, setQuickFilterText] = useState("")
  const [updatePicklistMutation] = useMutation(updatePicklist)
  const dispatch = useDispatch()

  const [gridApi, setGridApi] = useState<any>(null)
  const [gridColumnApi, setGridColumnApi] = useState(null)
  const [{ picklists }] = useQuery(getPicklists, {
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
    await updatePicklistMutation({
      ...selectRow,
      tenantid: 0,
      isdeleted: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    setIsDelete(false)
    //@ts-ignore
    await invalidateQuery(getPicklists, {})
  }
  const [isDelete, setIsDelete] = useState(false)

  return (
    <>
      <GridHeader
        headerConfig={{
          showSearch: true,
          showAdd: true,
          showEdit: true,
          showDelete: true,
          showExportCSV: true,
        }}
        title={"Picklists"}
        quickFilterText={quickFilterText}
        setQuickFilterText={setQuickFilterText}
        gridApi={gridApi}
        handleDeleteClick={() => setIsDelete(true)}
        handleAddClick={props.toggleAdd}
        handleEditClick={() => props.handleEdit(gridApi?.getSelectedRows()?.[0])}
        exportCSVName={"Picklists"}
      />
      <GridWrapper
        quickFilterText={quickFilterText}
        defaultColDef={defaultColDef}
        rowSelection={"single"}
        rowData={picklists}
        onGridReady={onGridReady}
        columnDefs={colDefs}
      />
      {isDelete && (
        <Confirmation
          openDialog={isDelete}
          message={`${AppConstants.messages.deleteConfirmation} Picklist ?`}
          handleNo={() => setIsDelete(false)}
          handleYes={() => handleDeleteClick()}
        />
      )}
    </>
  )
}

const PicklistsPage: BlitzPage = () => {
  const { toggle: toggleAdd, isShowing: showAdd } = useModal()
  const { toggle: toggleEdit, isShowing: showEdit } = useModal()
  const [selectedRow, setSelectedRow] = useState([0])
  const handleEdit = (data) => {
    toggleEdit()
    setSelectedRow(data)
  }
  return (
    <>
      <Head>
        <title>Picklists</title>
      </Head>

      <div>
        {showAdd && (
          <Modal open={showAdd} handleClose={toggleAdd} title={picklistFormSchema.title}>
            <Suspense fallback={<Loader />}>
              <NewPicklistFormWrapper handleClose={toggleAdd} />
            </Suspense>
          </Modal>
        )}
        {showEdit && (
          <Modal open={showEdit} handleClose={toggleEdit} title={picklistFormSchema.title}>
            <Suspense fallback={<Loader />}>
              <EditPicklistFormWrapper handleClose={toggleEdit} selectedRow={selectedRow} />
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
            <PicklistsGrid toggleAdd={toggleAdd} toggleEdit={toggleEdit} handleEdit={handleEdit} />
          </Box>
          <></>
        </Suspense>
      </div>
    </>
  )
}
const pageUrl = Routes.PicklistsPage().pathname

PicklistsPage.authenticate = true
PicklistsPage.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default PicklistsPage
