import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"
import { NotFoundError } from "blitz"
const GetStorelocation = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.string().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(
  resolver.zod(GetStorelocation),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const storelocation = await db.storelocations.findFirst({ where: { id } })
    const facilityManagerName = await db.user.findFirst({
      where: { id: storelocation?.facilitymanager || 0 },
    })
    if (!storelocation) throw new NotFoundError()

    return { ...storelocation, facilityManagerName: facilityManagerName?.name || "" }
  }
)
