import { useMutation, invalidateQuery } from "@blitzjs/rpc"
import { FORM_ERROR, FormWrapper } from "shared-ui"
import { Suspense } from "react"
import getRoles from "../queries/getRoles"
import { roleFormSchema } from "../schemas/roleFormSchema"
import updateRole from "../mutations/updateRole"

const EditRoleFormWrapper = (props: any) => {
  const [updateRoleMut] = useMutation(updateRole)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormWrapper
        formSchema={roleFormSchema}
        initialValues={props.selectedRow}
        onSubmit={async (values) => {
          const paylod = {
            ...values,
            tenantid: 0,
            isdeleted: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          }
          try {
            const data = await updateRoleMut(paylod)
            props.handleClose()
            //@ts-ignore
            await invalidateQuery(getRoles, {})
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
  )
}

export default EditRoleFormWrapper
