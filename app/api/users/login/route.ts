import bcrypt from "bcrypt"
import { type NextRequest, NextResponse } from "next/server"

import { findUserByEmail, generateTokens } from "@/shared/lib/utils/auth"
import { handleError } from "@/shared/lib/utils/error"
import type { LoginUserParams } from "@/types/user.actions.type"

export async function POST(req: NextRequest) {
  try {
    const user: LoginUserParams = await req.json()
    const findUser = await findUserByEmail(user.email)

    if (!findUser)
      return NextResponse.json({ error: "Email or password is incorrect!" }, { status: 500 })

    const isMatch = await bcrypt.compareSync(user.password, findUser.password)

    if (isMatch) {
      const token = await generateTokens(user.email, findUser.firstName)
      return NextResponse.json({ user_token: token })
    }
    return NextResponse.json({ error: "Email or password is incorrect!" }, { status: 500 })
  } catch (error) {
    handleError(error)
    return NextResponse.json({ error: "Error login" }, { status: 500 })
  }
}
