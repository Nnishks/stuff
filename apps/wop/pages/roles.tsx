import Head from "next/head"
import { BlitzPage, Routes } from "@blitzjs/next"
import { useQuery, invalidateQuery, useMutation } from "@blitzjs/rpc"
import { Suspense } from "react"

import { Box, Card } from "@mui/material"
import React, { useMemo, useState } from "react"
import {
  GridWrapper,
  useModal,
  GridHeader,
  Modal,
  Loader,
  AppConstants,
  Confirmation,
} from "shared-ui"
import { Skeleton } from "@mui/material"
import updateRole from "app/admin/roles/mutations/updateRole"
import getRoles from "app/admin/roles/queries/getRoles"
import { roleFormSchema } from "app/admin/roles/schemas/roleFormSchema"
import EditRoleFormWrapper from "app/admin/roles/components/EditRoleFormWrapper"
import NewRoleFormWrapper from "app/admin/roles/components/NewRoleFormWrapper"
import AppLayout from "app/core/layouts/AppLayout"
import colDefs from "app/core/col-defs/col-defs-roles"
import { useAppDispatch } from "app/core/hooks/reduxHooks"
import { updateHeaderText } from "app/store/slices/commonSlice"

function RoleGrid(props) {
  const [quickFilterText, setQuickFilterText] = useState("")
  const [updateRoleMutation] = useMutation(updateRole)

  const [gridApi, setGridApi] = useState<any>(null)
  const [gridColumnApi, setGridColumnApi] = useState(null)
  const [{ roles }] = useQuery(getRoles, {
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
    await updateRoleMutation({
      ...selectRow,
      tenantid: 0,
      isdeleted: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    setIsDelete(false)
    //@ts-ignore
    await invalidateQuery(getRoles, {})
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
        title={""}
        quickFilterText={quickFilterText}
        setQuickFilterText={setQuickFilterText}
        gridApi={gridApi}
        handleDeleteClick={() => setIsDelete(true)}
        handleAddClick={props.toggleAdd}
        handleEditClick={() => props.handleEdit(gridApi?.getSelectedRows()?.[0])}
        exportCSVName={"Roles"}
      />
      <GridWrapper
        quickFilterText={quickFilterText}
        defaultColDef={defaultColDef}
        rowSelection={"single"}
        rowData={roles}
        onGridReady={onGridReady}
        columnDefs={colDefs}
      />
      {isDelete && (
        <Confirmation
          openDialog={isDelete}
          message={`${AppConstants.messages.deleteConfirmation} Role ?`}
          handleNo={() => setIsDelete(false)}
          handleYes={() => handleDeleteClick()}
        />
      )}
    </>
  )
}

const RolesPage: BlitzPage = () => {
  const { toggle: toggleAdd, isShowing: showAdd } = useModal()
  const { toggle: toggleEdit, isShowing: showEdit } = useModal()
  const [selectedRow, setSelectedRow] = useState([0])
  const handleEdit = (data) => {
    toggleEdit()
    setSelectedRow(data)
  }
  const dispatch = useAppDispatch()
  dispatch(updateHeaderText("Roles"))
  return (
    <>
      <Head>
        <title>Roles</title>
      </Head>

      <div>
        {showAdd && (
          <Modal open={showAdd} handleClose={toggleAdd} title={roleFormSchema.title}>
            <Suspense fallback={<Loader />}>
              <NewRoleFormWrapper handleClose={toggleAdd} />
            </Suspense>
          </Modal>
        )}
        {showEdit && (
          <Modal open={showEdit} handleClose={toggleEdit} title={roleFormSchema.title}>
            <Suspense fallback={<Loader />}>
              <EditRoleFormWrapper handleClose={toggleEdit} selectedRow={selectedRow} />
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
          <Card sx={{ padding: "10px" }}>
            <Box height="calc(100vh - 110px)">
              <RoleGrid toggleAdd={toggleAdd} toggleEdit={toggleEdit} handleEdit={handleEdit} />
            </Box>
          </Card>
        </Suspense>
      </div>
    </>
  )
}
const pageUrl = Routes.RolesPage().pathname

RolesPage.authenticate = true
RolesPage.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default RolesPage
