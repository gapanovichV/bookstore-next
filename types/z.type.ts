import { z } from "zod"

export const userFormScheme = z.object({
  email: z.string().min(1, 'Email is required').email("Enter your email address"),
  password: z.string().min(1, 'Password is required'),
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
})
