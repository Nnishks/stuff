import { withBlitz } from "app/blitz-client"
import Head from "next/head"

import { useQueryErrorResetBoundary } from "@blitzjs/rpc"
import { AuthenticationError, AuthorizationError } from "blitz"
import { AppProps, ErrorBoundary, ErrorComponent, ErrorFallbackProps } from "@blitzjs/next"
import LoginForm from "app/auth/components/LoginForm"
import React, { Suspense } from "react"
import { Provider } from "react-redux"
import store from "../app/store"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-material.css"
import "app/styles/global.css"
import { CacheProvider } from "@emotion/react"
import type { EmotionCache } from "@emotion/cache"
import { Router } from "next/router"
import type { NextPage } from "next"
import { createEmotionCache } from "app/core/utils/create-emotion-cache"
// Shared Imports
import {
  themeConfig,
  SettingsConsumer,
  SettingsProvider,
  ThemeComponent,
  snackBarIconStyle,
  StyledSnackbarProvider,
} from "shared-ui"
import NProgress from "nprogress"
import Script from "next/script"
import getConfig from "next/config"
import "./app.css"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import WarningAmberIcon from "@mui/icons-material/WarningAmber"
// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start()
  })
  Router.events.on("routeChangeError", () => {
    NProgress.done()
  })
  Router.events.on("routeChangeComplete", () => {
    NProgress.done()
  })
}

export default withBlitz(function App(props: ExtendedAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  // const getLayout = Component.getLayout ?? ((page) => <AppLayout>{page}</AppLayout>)
  const getLayout = Component.getLayout || ((page) => page)
  const { publicRuntimeConfig } = getConfig()
  return (
    <CacheProvider value={emotionCache}>
      <Suspense fallback={<div />}>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${publicRuntimeConfig?.GOOGLE_ANALYTICS}`}
        />
        <Script strategy="lazyOnload" id="google-analytics">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${publicRuntimeConfig?.GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
        </Script>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
          <meta name="application-name" content="NexFmx" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="NexFmx" />
          <meta name="description" content="Best NexFmx in the world" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <script async src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"></script>

          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json"></link>
        </Head>
        {/* @ts-ignore */}
        <Provider store={store}>
          <ErrorBoundary
            FallbackComponent={RootErrorFallback}
            onReset={useQueryErrorResetBoundary().reset}
          >
            <StyledSnackbarProvider
              maxSnack={3}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              iconVariant={{
                success: <CheckCircleOutlineIcon sx={snackBarIconStyle} />,
                error: <ErrorOutlineIcon sx={snackBarIconStyle} />,
                warning: <WarningAmberIcon sx={snackBarIconStyle} />,
                info: <InfoOutlinedIcon sx={snackBarIconStyle} />,
              }}
            >
              <SettingsProvider>
                <SettingsConsumer>
                  {({ settings }) => {
                    return (
                      <ThemeComponent settings={settings}>
                        {getLayout(<Component {...pageProps} />)}
                      </ThemeComponent>
                    )
                  }}
                </SettingsConsumer>
              </SettingsProvider>
            </StyledSnackbarProvider>
          </ErrorBoundary>
        </Provider>
      </Suspense>
    </CacheProvider>
  )
})

function RootErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <LoginForm onSuccess={resetErrorBoundary} />
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
    )
  }
}
