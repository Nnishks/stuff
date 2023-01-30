import { useMutation, invalidateQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import { FORM_ERROR, FormWrapper } from "shared-ui"
import { Suspense } from "react"
import createPicklist from "../mutations/createPicklist"
import getPicklists from "../queries/getPicklists"
import { picklistFormSchema } from "../schemas/picklistFormSchema"
import { useSnackbar } from "notistack"

const NewPicklistFormWrapper = (props: any) => {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const [createPicklistMutation] = useMutation(createPicklist)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormWrapper
        formSchema={picklistFormSchema}
        onSubmit={async (values) => {
          const paylod = {
            ...values,
            tenantid: 0,
            isdeleted: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          }
          try {
            const data = await createPicklistMutation(paylod)
            props.handleClose()
            enqueueSnackbar("Picklist created successfully", { variant: "success" })
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
  )
}

export default NewPicklistFormWrapper
