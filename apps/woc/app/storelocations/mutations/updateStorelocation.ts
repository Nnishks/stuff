import { resolver } from "@blitzjs/rpc";
import db from "db"
import { z } from "zod"

const UpdateStorelocation = z.object({
  id: z.string(),
  storename: z.string(),
  storeemail: z.string(),
  faxnumber: z.string(),
  region: z.string(),
  regioncode: z.string(),
  concept: z.string(),
  dma: z.string(),
  company: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  address: z.string(),
  city: z.string(),
  stateprovince: z.string(),
  postalcode: z.string(),
  country: z.string(),
  storeopendate: z.nullable(z.date()),
  isclosed: z.boolean(),
  storecloseddate: z.nullable(z.date()),
  subvenue: z.string(),
  venue: z.string(),
  status: z.string(),
  isdeleted: z.boolean(),
  updatedat: z.date(),
  facilitymanager: z.nullable(z.number()),
  leadfacilitymanager: z.nullable(z.number()),
  primarypointofcontact: z.nullable(z.number()),
  storemanager: z.nullable(z.number()),
  refreshdate: z.nullable(z.date()),
  remodeldate: z.nullable(z.date()),
})

export default resolver.pipe(
  resolver.zod(UpdateStorelocation),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant

    const storelocation = await db.storelocations.update({
      where: { id },
      data: data,
    })

    return storelocation
  }
)
