import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetStorelocationsInput
  extends Pick<
    Prisma.StorelocationsFindManyArgs,
    "where" | "orderBy" | "skip" | "take" | "distinct"
  > {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, distinct }: GetStorelocationsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    let storelocations = await db.storelocations.findMany({
      where: {
        isdeleted: false,
        ...where,
        status: {
          notIn: ["Closed"],
        },
      },
      orderBy,
      distinct,
    })
    const users = await db.user.findMany({})
    storelocations = storelocations.map((item) => {
      const facilityManagerName = users.find((user) => user.id === item.facilitymanager)
      const createdByName = users.find((user) => user.id === item.createdby)
      const leadFacilityManagerName = users.find((user) => user.id === item.leadfacilitymanager)
      return {
        ...item,
        facilityManagerName: facilityManagerName ? facilityManagerName.name : "",
        leadFacilityManagerName: leadFacilityManagerName ? leadFacilityManagerName.name : "",
      }
    })

    return {
      storelocations,
      data: storelocations,
    }
  }
)
