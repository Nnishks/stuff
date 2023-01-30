import Head from "next/head"
import { BlitzPage, Routes } from "@blitzjs/next"
import { useQuery, invalidateQuery, useMutation } from "@blitzjs/rpc"
import { Suspense } from "react"
import { Box, Card } from "@mui/material"
import React, { useMemo, useState } from "react"
import { GridWrapper, useModal, GridHeader, Modal, Loader , AppConstants, Confirmation} from "shared-ui"
import { Skeleton } from "@mui/material"
import { userFormSchema } from "app/admin/users/schemas/userFormSchema"
import NewUserFormWrapper from "app/admin/users/components/NewUserFormWrapper"
import EditUserFormWrapper from "app/admin/users/components/EditUserFormWrapper"
import updateUser from "app/admin/users/mutations/updateUser"
import getUsers from "app/admin/users/queries/getUsers"
import forgotPassword from "app/auth/mutations/forgotPassword"
import { useSnackbar } from "notistack"
import AppLayout from "app/core/layouts/AppLayout"
import colDefs from "app/core/col-defs/col-defs-users"
import { useAppDispatch } from "app/core/hooks/reduxHooks"
import { updateHeaderText } from "app/store/slices/commonSlice"

export const UsersList = (props) => {
  const [quickFilterText, setQuickFilterText] = useState("")
  const [updateUserMut] = useMutation(updateUser)
  const [gridApi, setGridApi] = useState<any>(null)
  const [gridColumnApi, setGridColumnApi] = useState(null)
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword)
  const [{ users }] = useQuery(getUsers, {
    orderBy: { id: "asc" },
  })
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
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
    await updateUserMut({
      ...selectRow,
      updatedAt: new Date(),
      isdeleted: true,
    })
    setIsDelete(false)
    //@ts-ignore
    await invalidateQuery(getUsers, {})
  }
  const [isDelete, setIsDelete] = useState(false)
  const handleEmailClick = async () => {
    const selectRow = gridApi?.getSelectedRows()?.[0]
    enqueueSnackbar("Successfully send reset password link", { variant: "success" })
    await forgotPasswordMutation({ email: selectRow.email })
  }
  return (
    <>
      <GridHeader
        headerConfig={{
          showSearch: true,
          showAdd: true,
          showEdit: true,
          showDelete: true,
          showExportCSV: true,
          showSendEmail: true,
        }}
        title={""}
        quickFilterText={quickFilterText}
        setQuickFilterText={setQuickFilterText}
        gridApi={gridApi}
        handleDeleteClick={() => setIsDelete(true)}
        handleAddClick={props.toggleAdd}
        handleEditClick={() => props.handleEdit(gridApi?.getSelectedRows()?.[0])}
        exportCSVName={"Users"}
        handleEmailClick={handleEmailClick}
      />
      <GridWrapper
        quickFilterText={quickFilterText}
        defaultColDef={defaultColDef}
        rowSelection={"single"}
        rowData={users}
        onGridReady={onGridReady}
        columnDefs={colDefs}
      />
      {isDelete && (
        <Confirmation
          openDialog={isDelete}
          message={`${AppConstants.messages.deleteConfirmation} User ?`}
          handleNo={() => setIsDelete(false)}
          handleYes={() => handleDeleteClick()}
        />
      )}
    </>
  )
}

const UsersPage: BlitzPage = () => {
  const dispatch = useAppDispatch()
  dispatch(updateHeaderText("Users"))
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
        <title>Users</title>
      </Head>
      <div>
        {showAdd && (
          <Modal open={showAdd} handleClose={toggleAdd} title={userFormSchema.title}>
            <Suspense fallback={<Loader />}>
              <NewUserFormWrapper handleClose={toggleAdd} />
            </Suspense>
          </Modal>
        )}
        {showEdit && (
          <Modal open={showEdit} handleClose={toggleEdit} title={"Edit User"}>
            <Suspense fallback={<Loader />}>
              <EditUserFormWrapper
                handleClose={toggleEdit}
                selectedRow={selectedRow}
                formSchema={userFormSchema}
              />
            </Suspense>
          </Modal>
        )}
        <Suspense
          fallback={
            <>
              {" "}
              <Skeleton animation="wave" height={90} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" variant="rectangular" height="calc(100vh - 170px)" />
            </>
          }
        >
          <Card sx={{ padding: "10px" }}>
            <Box height="calc(100vh - 110px)">
              <UsersList toggleAdd={toggleAdd} toggleEdit={toggleEdit} handleEdit={handleEdit} />
            </Box>
          </Card>
        </Suspense>
      </div>
    </>
  )
}
const pageUrl = Routes.UsersPage().pathname
UsersPage.authenticate = true
UsersPage.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default UsersPage
