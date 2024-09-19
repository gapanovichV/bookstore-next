import bcrypt from "bcrypt"
import { type NextRequest, NextResponse } from "next/server"

import { findUserByEmail, generateTokens } from "@/lib/utils/auth"
import { handleError } from "@/lib/utils/error"
import { Status, type StatusResponse } from "@/types/response.type"
import type { LoginUserParams } from "@/types/user.actions.type"

export async function POST(req: NextRequest): Promise<NextResponse<StatusResponse>> {
  try {
    const user: LoginUserParams = await req.json()
    const findUser = await findUserByEmail(user.email)

    if (!findUser)
      return NextResponse.json({
        status: Status.Error,
        message: "Email or password is incorrect!"
      })

    const isMatch = await bcrypt.compareSync(user.password, findUser.password)

    if (isMatch) {
      const token = await generateTokens(user.email, findUser.firstName)
      return NextResponse.json({
        status: Status.Success,
        message: "Login successfully completed",
        user_token: token
      })
    }
    return NextResponse.json({
      status: Status.Error,
      message: "Email or password is incorrect!"
    })
  } catch (error) {
    handleError(error)
    return NextResponse.json({ status: Status.Error, message: "Error login" })
  }
}
