import { z } from "zod"


export const userRegistrationFormScheme = z.object({
  email: z.string().min(1, "Email is required").email("Enter your email address"),
  password: z.string().min(1, "Password is required").min(8, 'Password must have at least 8 characters'),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required")
})

export const userLoginFormScheme = z.object({
  email: z.string().min(1, "Email is required").email("Enter your email address"),
  password: z.string().min(1, "Password is required")
})
