import { resolver } from "@blitzjs/rpc";
import db from "db"
import { z } from "zod"

const CreateSetting = z.object({
  customername: z.string(),
  region: z.string(),
  hostname: z.string(),
  bucketname: z.string(),
  foldername: z.string(),
  secretkey: z.string(),
  accesskey: z.string(),
  updatedat: z.date(),
  uniquename: z.string(),
  uniqueid: z.string(),
})

export default resolver.pipe(resolver.zod(CreateSetting), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const setting = await db.tenants.create({
    //@ts-ignore
    data: input
  })

  return setting
})
