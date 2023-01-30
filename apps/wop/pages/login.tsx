import { BlitzPage, Routes } from "@blitzjs/next"
import { useRouter } from "next/router"
import { LoginForm } from "app/auth/components/LoginForm"
import BlankLayout from "app/core/layouts/BlankLayout"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <LoginForm
        onSuccess={() => {
          //  Routes.DashboardsPage()
        }}
      />
    </div>
  )
}

LoginPage.redirectAuthenticatedTo = "/"
export default LoginPage
