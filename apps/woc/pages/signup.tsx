import getConfig from "next/config"
import { BlitzPage, Routes } from "@blitzjs/next"
import { useRouter } from "next/router"
// import DashboardLayout from "app/core/layouts/Layout"
import { SignupForm } from "app/auth/components/SignupForm"

const SignupPage = () => {
  const router = useRouter()

  return (
    <div>
      {/* /*<SignupForm onSuccess={() => router.push(Routes.Home())} />  */}
      <h2>
        Please send an email to support@nexfmx.io, if you are supposed to get access to NexFMx app.
      </h2>
    </div>
  )
}

export default SignupPage
