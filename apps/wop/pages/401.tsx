import Head from "next/head"
import { ErrorComponent as DefaultErrorComponent } from "@blitzjs/next"

export default function Page401() {
  const statusCode = 401
  const title = "You don't have access to this page. Please contact support team for help."
  return (
    <>
      <Head>
        <title>
          {statusCode}: {title}
        </title>
      </Head>
      <DefaultErrorComponent statusCode={statusCode} title={title} />
    </>
  )
}
