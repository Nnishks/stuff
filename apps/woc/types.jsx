import { SessionContext, SimpleRolesIsAuthorized } from "@blitzjs/auth";
import { User } from "db"

// Note: You should switch to Postgres and then use a DB enum for role type
export type Role = "admin" | "manager" | "director" | "senior manager"

declare module "@blitzjs/auth" {
  export interface Ctx {
    session: SessionContext
  }
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>
    PublicData: {
      userId: User["id"]
      role: Role
    }
  }
}
