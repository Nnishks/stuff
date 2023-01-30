import Head from "next/head"
import { BlitzPage } from "@blitzjs/next"
import { Box } from "@mui/material"
import { Skeleton } from "@mui/material"
import AppLayout from "app/core/layouts/AppLayout"
import React, { Suspense } from "react"

const ContactSupport: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Contact Support</title>
      </Head>
      <div>
        <Box height="calc(100vh)">
          <iframe
            className="clickup-embed "
            src="https://forms.clickup.com/f/13g530-4504/6API4LYTPCNPT2WGMC"
            width="100%"
            height="100%"
            style={{ background: "transparent", border: "0px solid #ccc" }}
          ></iframe>
        </Box>
      </div>
    </>
  )
}
ContactSupport.authenticate = true
ContactSupport.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default ContactSupport
