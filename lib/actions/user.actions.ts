"use server"

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import dbConnection from "@/lib/database/dbConnection"
import type { UserParams } from "@/lib/database/models/user.model"
import User from "@/lib/database/models/user.model"
import { handleError } from "@/lib/utils"
import type { StatusResponse } from "@/types/response.type"
import { Status } from "@/types/response.type"
import type { LoginUserParams, RegistrationUserParams } from "@/types/user.actions.type"

const JWT_ACCESS_TOKEN_KEY = process.env.JWT_ACCESS_TOKEN_KEY as string
const JWT_REFRESH_TOKEN_KEY = process.env.JWT_REFRESH_TOKEN_KEY as string

export const generateTokens = async (email: string, firstName: string) => {
  const accessToken = await jwt.sign({ email, firstName }, JWT_ACCESS_TOKEN_KEY, {
    expiresIn: "10m"
  })
  const refreshToken = await jwt.sign({ email }, JWT_REFRESH_TOKEN_KEY, { expiresIn: "30d" })
  return { accessToken, refreshToken }
}

export const findUserByEmail = async (email: string) => {
  await dbConnection()
  return User.findOne({ email })
}

export const registrationUser = async (user: RegistrationUserParams): Promise<StatusResponse> => {
  await dbConnection()

  const findUser: UserParams = await findUserByEmail(user.email)
  if (findUser !== null)
    return {
      status: Status.ClientErrorBadRequest,
      message: "This email address is already used by"
    }

  try {
    const salt = await bcrypt.genSalt(10)
    const newPassword = await bcrypt.hash(user.password, salt)

    await User.create({ ...user, password: newPassword })

    const token = await generateTokens(user.email, user.firstName)

    return {
      status: Status.SuccessOK,
      message: "Registration successfully completed",
      user_token: token
    }
  } catch (error) {
    handleError(error)
    return { status: Status.ClientErrorBadRequest, message: "User is not created" }
  }
}

export const loginUser = async (user: LoginUserParams): Promise<StatusResponse> => {
  await dbConnection()

  const findUser: UserParams = await findUserByEmail(user.email)
  if (!findUser)
    return { status: Status.ClientErrorBadRequest, message: "Email or password is incorrect!" }

  const isMatch = await bcrypt.compareSync(user.password, findUser.password)
  if (isMatch) {
    const token = await generateTokens(user.email, findUser.firstName)
    return { status: Status.SuccessOK, message: "Login successfully completed", user_token: token }
  }
  return { status: Status.ClientErrorBadRequest, message: "Email or password is incorrect!" }
}

export const isValidAccessToken = async (
  token: string | undefined
): Promise<{
  message: string
  error?: { message: string }
  status: Status
}> => {
  const baseError = { message: "Unauthorized", status: Status.ClientErrorUnauthorized }

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
  return { status: Status.SuccessOK, message: "Is valid access token" }
}
