import { useMutation, invalidateQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import { FORM_ERROR, FormWrapper } from "shared-ui"
import { Suspense } from "react"
import updatePicklist from "../mutations/updatePicklist"
import { picklistFormSchema } from "../schemas/picklistFormSchema"
import getPicklists from "../queries/getPicklists"

const EditPicklistFormWrapper = (props: any) => {
  const router = useRouter()
  const [updatePicklistMutation] = useMutation(updatePicklist)
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <FormWrapper
          initialValues={props.selectedRow}
          formSchema={picklistFormSchema}
          onSubmit={async (values) => {
            try {
              const data = await updatePicklistMutation({
                ...values,
                tenantid: 0,
                isdeleted: false,
                createdAt: new Date(),
                updatedAt: new Date(),
              })
              props.handleClose()
              //@ts-ignore
              await invalidateQuery(getPicklists, {})
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

export default EditPicklistFormWrapper
