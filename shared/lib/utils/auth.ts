import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import { prisma } from "@/prisma/prisma-client"
import type { FormRegistrationSchema } from "@/shared/components/modules/RegistrationForm/RegistrationForm"

const JWT_ACCESS_TOKEN_KEY = process.env.JWT_ACCESS_TOKEN_KEY as string
const JWT_REFRESH_TOKEN_KEY = process.env.JWT_REFRESH_TOKEN_KEY as string

export const findUserByEmail = async (email: string) => {
  return prisma.user.findFirst({
    where: { email }
  })
}

export const generateTokens = async (email: string, firstName: string) => {
  const accessToken = await jwt.sign({ email, firstName }, JWT_ACCESS_TOKEN_KEY, {
    expiresIn: "10m"
  })
  const refreshToken = await jwt.sign({ email }, JWT_REFRESH_TOKEN_KEY, { expiresIn: "30d" })
  return { accessToken, refreshToken }
}

export const isValidAccessToken = async (
  token: string | undefined
): Promise<{
  message: string
  error?: { message: string }
}> => {
  const baseError = { message: "Unauthorized" }

  let jwtError = null

  if (!token) {
    return { ...baseError, error: { message: "jwt is required" } }
  }
  await jwt.verify(token, JWT_ACCESS_TOKEN_KEY, (error: null) => {
    if (error) jwtError = error
  })
  if (jwtError) {
    return {
      ...baseError,
      error: jwtError
    }
  }
  return { message: "Is valid access token" }
}

export const createUserAndGenerateTokens = async (user: FormRegistrationSchema) => {
  const salt = await bcrypt.genSalt(10)
  const newPassword = await bcrypt.hash(user.password, salt)

  await prisma.user.create({
    data: {
      ...user,
      password: newPassword
    }
  })

  return generateTokens(user.email, user.firstName)
}
