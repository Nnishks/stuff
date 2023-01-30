import { resolver } from "@blitzjs/rpc";
import db from "db"
import { z } from "zod"

const DeletePicklist = z.object({
  id: z.number(),
})

export default resolver.pipe(resolver.zod(DeletePicklist), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const picklist = await db.picklist.deleteMany({ where: { id } })

  return picklist
})
