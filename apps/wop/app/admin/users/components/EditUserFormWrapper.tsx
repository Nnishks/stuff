import { useMutation, invalidateQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import { FORM_ERROR, FormWrapper } from "shared-ui"
import { Suspense } from "react"
import updateUser from "../mutations/updateUser"
import getUsers from "../queries/getUsers"
import getCurrentUser from "../queries/getCurrentUser"

const EditUserFormWrapper = (props: any) => {
  const router = useRouter()
  const [updateUserMut] = useMutation(updateUser)
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <FormWrapper
          initialValues={props.selectedRow}
          formSchema={props.formSchema}
          onSubmit={async (values) => {
            try {
              const data = await updateUserMut({
                ...values,
                updatedAt: new Date(),
                manager: values.manager ? values.manager.id : null,
                isdeleted: false,
              })
              props.handleClose()
              //@ts-ignore
              await invalidateQuery(getUsers, {})
              //@ts-ignore
              await invalidateQuery(getCurrentUser, {})
            } catch (error) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
          handleClose={props.handleClose}
        />
      </Suspense>
    </div>
  )
}

export default EditUserFormWrapper
