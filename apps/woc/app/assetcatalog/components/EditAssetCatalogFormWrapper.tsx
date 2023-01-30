import { useMutation, invalidateQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import { FORM_ERROR } from "app/core/components/Form"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { Suspense } from "react"
import { FormWrapper } from "app/core/components/generateform/FormWrapper"
import updateStorelocation from "../mutations/updateAssetCatalog"
import { storeLocationFormSchema } from "../schemas/storeLocationFormSchema"
import getStorelocations from "../queries/getAssetCatalogs"

const EditStoreFormWrapper = (props: any) => {
  const router = useRouter()
  const [updateStorelocationMut] = useMutation(updateStorelocation)
  const currentUser = useCurrentUser()
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <FormWrapper
          initialValues={props.selectedRow}
          formSchema={storeLocationFormSchema}
          onSubmit={async (values) => {
            try {
              const data = await updateStorelocationMut({
                ...values,
                isclosed: false,
                tenantid: 0,
                isdeleted: false,
                createdat: new Date(),
                updatedat: new Date(),
                storeopendate: values.storeopendate ? new Date(values.storeopendate) : null,
                storecloseddate: values.storecloseddate ? new Date(values.storecloseddate) : null,
                refreshdate: values.refreshdate ? new Date(values.refreshdate) : null,
                remodeldate: values.remodeldate ? new Date(values.remodeldate) : null,
                updatedby: currentUser?.id,
                storemanager:
                  (typeof values?.storemanager === "number"
                    ? values?.storemanager
                    : values?.storemanager?.id) || null,
                facilitymanager:
                  (typeof values.facilitymanager === "number"
                    ? values.facilitymanager
                    : values.facilitymanager?.id) || null,
                leadfacilitymanager:
                  (typeof values?.leadfacilitymanager === "number"
                    ? values?.leadfacilitymanager
                    : values?.leadfacilitymanager?.id) || null,
                primarypointofcontact: values.primarypointofcontact,
                latitude: values.latitude || "",
                longitude: values.longitude || "",
              })
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
    </div>
  )
}

export default EditStoreFormWrapper
