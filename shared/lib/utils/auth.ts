import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import { prisma } from "@/prisma/prisma-client"
import type { FormRegistrationSchema } from "@/shared/components/modules/RegistrationForm/RegistrationForm"
import type { UserWithRelations } from "@/types/prisma"

const JWT_ACCESS_TOKEN_KEY = process.env.JWT_ACCESS_TOKEN_KEY as string
const JWT_REFRESH_TOKEN_KEY = process.env.JWT_REFRESH_TOKEN_KEY as string

export const findUserByEmail = async (email: string): Promise<UserWithRelations | null> => {
  return prisma.user.findUnique({
    where: { email },
    include: {
      comment: {
        include: {
          comments: true
        }
      }
    }
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
  status?: number
  message: string
  error?: { message: string }
}> => {
  const baseError = { message: "Unauthorized" }

  if (!token) {
    return { ...baseError, error: { message: "JWT is required" } }
  }

  try {
    await jwt.verify(token, JWT_ACCESS_TOKEN_KEY)
    return { message: "Valid access token", status: 200 }
  } catch (error) {
    return {
      ...baseError,
      error: { message: error instanceof Error ? error.message : "Invalid token" }
    }
  }
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

export const parseJwt = (token: string) => {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString())
}
