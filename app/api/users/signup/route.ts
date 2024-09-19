import { type NextRequest, NextResponse } from "next/server"

import { createUserAndGenerateTokens, findUserByEmail } from "@/shared/lib/utils/auth"
import { handleError } from "@/shared/lib/utils/error"
import { Status, type StatusResponse } from "@/types/response.type"
import type { RegistrationUserParams } from "@/types/user.actions.type"

export async function POST(req: NextRequest): Promise<NextResponse<StatusResponse>> {
  try {
    const user: RegistrationUserParams = await req.json()
    const findUser = await findUserByEmail(user.email)

    if (findUser !== null)
      return NextResponse.json({
        status: Status.Error,
        message: "This email address is already used by"
      })

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
