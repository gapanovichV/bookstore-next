import type { UserRole } from "@/lib/database/models/user.model"

export interface RegistrationUserParams {
  email: string
  password: string
  lastName: string
  firstName: string
  role?: UserRole
}
export interface LoginUserParams {
  email: string
  password: string
}