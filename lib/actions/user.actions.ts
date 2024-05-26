"use server"

import bcrypt from "bcrypt"

import dbConnection from "@/lib/database/dbConnection"
import User from "@/lib/database/models/user.model"
import { handleError } from "@/lib/utils"
import type { LoginUserParams, RegistrationUserParams } from "@/types/user.actions.type"

export const registrationUser = async (user: RegistrationUserParams) => {
  try {
    await dbConnection()
    const newPassword = await bcrypt.hash(user.password, 10)
    const newUser = await User.create({
      ...user,
      password: newPassword,
    })
    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    handleError(error)
  }
}

export const loginUser = async(user: LoginUserParams) => {
  try {
    await dbConnection()
  } catch (error) {
    handleError(error)
  }
}
