import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"
import { NotFoundError } from "blitz"

const GetAssetCatalog = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.string(),
})

export default resolver.pipe(
  resolver.zod(GetAssetCatalog),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const assetCatalog = await db.assetCatalog.findFirst({ where: { id } })

    if (!assetCatalog) throw new NotFoundError()

    return assetCatalog
  }
)
