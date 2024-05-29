"use server"

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import dbConnection from "@/lib/database/dbConnection"
import User from "@/lib/database/models/user.model"
import { handleError } from "@/lib/utils"
import type {
  LoginUserParams,
  RegistrationUserParams,
  StatusResponse
} from "@/types/user.actions.type"

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string

export const registrationUser = async (user: RegistrationUserParams): Promise<StatusResponse> => {
  await dbConnection()

  const findUser = await User.findOne({ email: user.email })

  if (findUser !== null) return { status: "error", errorMessage: "This email address is already used by" }

  try {
    const newPassword = await bcrypt.hash(user.password, 10)
    await User.create({ ...user, password: newPassword })

    return { status: "success" }
  } catch (error) {
    handleError(error)
    return {status: "error", errorMessage: "User is not created"}
  }
}

export const loginUser = async (user: LoginUserParams): Promise<StatusResponse> => {
  await dbConnection()

  const findUser = await User.findOne({ email: user.email })

  if (!findUser) return { status: "error", errorMessage: "Email or password is incorrect!" }

  const isPasswordValid = await bcrypt.compare(user.password, findUser.password)


  if (isPasswordValid) {
     const token = jwt.sign({ email: findUser.email}, JWT_SECRET_KEY)

    return { status: "success", user: token }
  }
  return { status: "error", errorMessage: "Email or password is incorrect!" }
}
