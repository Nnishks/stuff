import { resolver } from "@blitzjs/rpc";
import db from "db"
import { z } from "zod"

const DeleteStorelocation = z.object({
  id: z.string(),
})

export default resolver.pipe(
  resolver.zod(DeleteStorelocation),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const storelocation = await db.storelocations.deleteMany({ where: { id } })

    return storelocation
  }
)
