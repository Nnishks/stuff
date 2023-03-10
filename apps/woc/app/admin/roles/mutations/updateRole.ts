import { resolver } from "@blitzjs/rpc";
import db from "db"
import { z } from "zod"

const UpdateRole = z.object({
  id: z.number(),
  tenantid: z.number(),
  name: z.string(),
  description: z.string(),
  isdeleted: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export default resolver.pipe(
  resolver.zod(UpdateRole),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const role = await db.role.update({ where: { id }, data })

    return role
  }
)
