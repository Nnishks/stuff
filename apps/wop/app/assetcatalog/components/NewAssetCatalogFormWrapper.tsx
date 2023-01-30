import { invalidateQuery, useMutation } from "@blitzjs/rpc"
import { FORM_ERROR } from "app/core/components/Form"
import { FormWrapper } from "app/core/components/generateform/FormWrapper"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { storeLocationFormSchema } from "app/storelocations/schemas/storeLocationFormSchema"
import { Suspense } from "react"
import createStorelocation from "../mutations/createAssetCatalog"
import getStorelocations from "../queries/getAssetCatalogs"

const NewStoreFormWrapper = (props: any) => {
  const [createStore] = useMutation(createStorelocation)
  const currentUser = useCurrentUser()
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormWrapper
        formSchema={storeLocationFormSchema}
        onSubmit={async (values) => {
          const paylod = {
            ...values,
            isclosed: false,
            tenantid: 0,
            isdeleted: false,
            createdat: new Date(),
            updatedat: new Date(),
            storeopendate: new Date(),
            storecloseddate: new Date(),
            refreshdate: new Date(),
            remodeldate: new Date(),
            createdby: currentUser?.id,
            updatedby: currentUser?.id,
            storemanager: values?.storemanager?.id || 0,
            facilitymanager: values?.facilitymanager?.id || 0,
            leadfacilitymanager: values?.leadfacilitymanager?.id || 0,
            primarypointofcontact: values?.primarypointofcontact?.id || 0,
          }
          try {
            const data = await createStore(paylod)
            props.handleClose()
            //@ts-ignore
            await invalidateQuery(getStorelocations, {})
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

export default NewStoreFormWrapper
