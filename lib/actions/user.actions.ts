"use server"

import bcrypt from "bcrypt"

import dbConnection from "@/lib/database/dbConnection"
import User from "@/lib/database/models/user.model"
import { handleError } from "@/lib/utils"
import type {
  LoginUserParams,
  RegistrationUserParams,
  StatusResponse
} from "@/types/user.actions.type"

export const registrationUser = async (user: RegistrationUserParams): Promise<StatusResponse> => {
  await dbConnection()

  const findUser = await User.findOne({ email: user.email })

  if (findUser !== null) return { status: "error", error: "This email address is already used by" }

  try {
    const newPassword = await bcrypt.hash(user.password, 10)
    await User.create({ ...user, password: newPassword })

    return { status: "success" }
  } catch (error) {
    handleError(error)
    return {status: "error", error: "User is not created"}
  }
}

export const loginUser = async (user: LoginUserParams) => {
  try {
    await dbConnection()
  } catch (error) {
    handleError(error)
  }
}
