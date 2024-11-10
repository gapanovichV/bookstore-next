import bcrypt from "bcrypt"
import { type NextRequest, NextResponse } from "next/server"

import type { FormLoginSchema } from "@/shared/components/modules/LoginForm/LoginForm"
import { findUserByEmail, generateTokens } from "@/shared/lib/utils/auth"

export async function POST(req: NextRequest) {
  try {
    const user: FormLoginSchema = await req.json()
    const findUser = await findUserByEmail(user.email)

    if (!findUser)
      return NextResponse.json({ error: "Email or password is incorrect!" }, { status: 500 })

    const isMatch = await bcrypt.compareSync(user.password, findUser.password)

    if (isMatch) {
      const token = await generateTokens(user.email, findUser.firstName)
      return NextResponse.json({ token })
    }
    return NextResponse.json({ error: "Email or password is incorrect!" }, { status: 500 })
  } catch (error) {
    console.error(`[Users Login] Error:`, error)
    return NextResponse.json({ error: "Error login" })
  }
}
