import { resolver } from "@blitzjs/rpc";
import db, { Prisma } from "db"

interface GetPicklistsInput
  extends Pick<Prisma.PicklistFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy }: GetPicklistsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const picklists = await db.picklist.findMany({
      where,
      orderBy,
    })

    return {
      picklists,
      data: picklists,
    }
  }
)
