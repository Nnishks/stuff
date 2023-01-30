import { BlitzPage } from "@blitzjs/next"
import { Suspense } from "react"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import AppLayout from "app/core/layouts/AppLayout"
import LoginPage from "./login"
import BlankLayout from "app/core/layouts/BlankLayout"
import Dashboard from "app/dashboard/components/Dashboard"

const Initialize = () => {
  const currentUser = useCurrentUser()
  if (currentUser) {
    return (
      <>
        <AppLayout>
          <Dashboard />
        </AppLayout>
      </>
    )
  } else {
    return (
      <>
        <BlankLayout title={"Login"}>
          <LoginPage />
        </BlankLayout>
      </>
    )
  }
}

const Home: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <Suspense fallback={<div>loading....</div>}>
          <Initialize />
        </Suspense>
      </main>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
export default Home
