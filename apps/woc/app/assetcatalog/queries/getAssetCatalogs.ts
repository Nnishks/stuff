import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetAssetCatalogsInput
  extends Pick<
    Prisma.AssetCatalogFindManyArgs,
    "where" | "orderBy" | "skip" | "take" | "distinct"
  > { }

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, distinct }: GetAssetCatalogsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    let assetCatalog = await db.assetCatalog.findMany({
      where: {
        isdeleted: false,
        ...where,
      },
      orderBy,
      distinct,
    })


    return { assetCatalog }
  }
)
