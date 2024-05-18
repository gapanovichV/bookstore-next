"use server"

import dbConnection from "@/lib/database/dbConnection"
import { handleError } from "@/lib/utils"
import type { CreateUserParams } from "@/types/user.actions.type"

export const createUser = async (user: CreateUserParams) => {
  try {
    await dbConnection()
    const user = 5
    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    handleError(error)
  }
}
