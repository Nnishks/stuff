import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

export default resolver.pipe(resolver.authorize(), async ({ user }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  let userId = null
  if (user && user.id && user.profile !== "admin" && user.profile !== "director") {
    userId = user.id
  }
  const data: any = await db.$queryRaw`SELECT
    STORE.storename,
    STORE.storeemail,
    STORE.phonenumber,
    STORE.address,
    STORE.city,
    STORE.stateprovince,
    STORE.country,
    STORE.postalcode,
    STORE.phonenumber,
    STORE.latitude,
    STORE.longitude,
    CAST(STORE.storeopendate as DATE),
    STORE.regioncode AS Region,
    STORE.id AS id,
    FFA.id AS surveyId,
    FFA.status AS status,
    CAST(FFA.completedat as DATE),
    CAST(FFA.createdat as DATE)
  FROM public."Storelocations" AS STORE
  LEFT JOIN public."FFAsurvey" AS FFA
  ON STORE.id = FFA.storeid AND FFA.isarchived = false
  AND FFA.isdeleted = false
  WHERE STORE.isdeleted = false
  AND STORE.regioncode != ''
  AND STORE.status = 'Active'
  AND STORE.isffasurveyrequired = true
  ${userId ? Prisma.sql` AND STORE.facilitymanager='${userId}'` : Prisma.empty}
  AND STORE.latitude != ''
  AND STORE.longitude != ''
  ORDER BY STORE.regioncode, STORE.id ASC`

  // Remove duplicates
  const storelocations = data.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i)

  return {
    stores: storelocations,
  }
})
