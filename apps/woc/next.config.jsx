const { withBlitz } = require("@blitzjs/next")
const withPWA = require("next-pwa")({
  dest: "public",
})
const config = {
  images: {
    domains: ["fieldservexpress.s3.amazonaws.com"],
  },
  //   pwa: {
  //     disable: process.env.NODE_ENV === 'development',
  //     maximumFileSizeToCacheInBytes: 3145728,
  // },
  publicRuntimeConfig: {
    BLITZ_APP_DIR: process.env.BLITZ_APP_DIR,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    AWS_FOLDER_NAME: process.env.AWS_FOLDER_NAME,
    AWS_REGION: process.env.AWS_REGION,
    TENANT: process.env.TENANT,
    MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
    AWS_DOMAIN: process.env.AWS_DOMAIN,
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
  },
  experimental: {
    transpilePackages: ["ui"],
  },
}
module.exports = withBlitz(config)
