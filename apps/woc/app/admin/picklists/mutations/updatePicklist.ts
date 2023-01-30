import { resolver } from "@blitzjs/rpc";
import db from "db"
import { z } from "zod"

const UpdatePicklist = z.object({
  id: z.number(),
  name: z.string(),
  tenantid: z.number(),
  uniquename: z.string(),
  description: z.string(),
  valueName: z.string(),
  isdeleted: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export default resolver.pipe(
  resolver.zod(UpdatePicklist),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const picklist = await db.picklist.update({ where: { id }, data })

    return picklist
  }
)
