import Head from "next/head"
import { BlitzPage } from "@blitzjs/next"
import { Box } from "@mui/material"
import AppLayout from "app/core/layouts/AppLayout"
import React, { Suspense } from "react"

const Feedback: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Feedback</title>
      </Head>
      <div>
        <Box height="calc(100vh)">
          <iframe
            className="clickup-embed "
            src="https://forms.clickup.com/f/13g530-5584/5IJPXD0M4I9SVEI4JF"
            width="100%"
            height="100%"
            style={{ background: "transparent", border: "0px solid #ccc" }}
          ></iframe>
        </Box>
      </div>
    </>
  )
}
Feedback.authenticate = true
Feedback.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default Feedback
