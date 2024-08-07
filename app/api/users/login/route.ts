import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

import type { UserParams } from "@/lib/database/models/user.model"
import { findUserByEmail, generateTokens } from "@/lib/utils/auth"
import { handleError } from "@/lib/utils/error"
import { getDbAndReqBody } from "@/lib/utils/getDbAndReqBody"
import type { StatusResponse } from "@/types/response.type"
import { Status } from "@/types/response.type"
import type { LoginUserParams } from "@/types/user.actions.type"

export async function POST(req: Request): Promise<NextResponse<StatusResponse>> {
  try {
    const { reqBody } = await getDbAndReqBody(req)
    const user = reqBody as LoginUserParams
    const findUser: UserParams = await findUserByEmail(user.email)

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
