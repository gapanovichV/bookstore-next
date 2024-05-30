import { NextResponse } from "next/server"

import type { UserParams } from "@/lib/database/models/user.model"
import {
  createUserAndGenerateTokens,
  findUserByEmail,
  getDbAndReqBody
} from "@/lib/utils/api-routes"
import { handleError } from "@/lib/utils/error"
import type { StatusResponse } from "@/types/response.type"
import { Status } from "@/types/response.type"
import type { RegistrationUserParams } from "@/types/user.actions.type"

export async function POST(req: Request): Promise<NextResponse<StatusResponse>> {
  const { reqBody } = await getDbAndReqBody(req)
  const user = reqBody as RegistrationUserParams
  const findUser: UserParams = await findUserByEmail(user.email)

  if (findUser !== null)
    return NextResponse.json({
      status: Status.Error,
      message: "This email address is already used by"
    })

  try {
    const token = await createUserAndGenerateTokens(user)

    return NextResponse.json({
      status: Status.Success,
      message: "Registration successfully completed",
      user_token: token
    })
  } catch (error) {
    handleError(error)
    return NextResponse.json({ status: Status.Error, message: "User is not created" })
  }
}
