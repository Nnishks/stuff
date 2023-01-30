import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const CreateStorelocation = z.object({
  id: z.string(),
  tenantid: z.number(),
  storename: z.optional(z.string()),
  storeemail: z.optional(z.string()),
  faxnumber: z.optional(z.string()),
  region: z.optional(z.string()),
  regioncode: z.optional(z.string()),
  concept: z.optional(z.string()),
  dma: z.optional(z.string()),
  company: z.optional(z.string()),
  latitude: z.optional(z.string()),
  longitude: z.optional(z.string()),
  address: z.string(),
  city: z.string(),
  stateprovince: z.string(),
  postalcode: z.optional(z.string()),
  country: z.string(),
  storeopendate: z.optional(z.date()),
  isclosed: z.boolean(),
  storecloseddate: z.optional(z.date()),
  subvenue: z.optional(z.string()),
  venue: z.optional(z.string()),
  status: z.optional(z.string()),
  isdeleted: z.boolean(),
  updatedat: z.date(),
  facilitymanager: z.number(),
  leadfacilitymanager: z.optional(z.number()),
  primarypointofcontact: z.optional(z.number()),
  storemanager: z.optional(z.number()),
  refreshdate: z.optional(z.date()),
  remodeldate: z.optional(z.date()),
  createdby: z.number(),
  updatedby: z.number(),
})
export default resolver.pipe(
  resolver.zod(CreateStorelocation),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const storelocation = await db.storelocations.create({
      data: input,
    })

    return storelocation
  }
)
