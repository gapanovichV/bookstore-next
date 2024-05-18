import { z } from "zod"

export const userFormScheme = z.object({
  email: z.string(),
  password: z.string(),
  lastName: z.string(),
  firstName: z.string()
})
