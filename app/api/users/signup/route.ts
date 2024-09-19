import { type NextRequest, NextResponse } from "next/server"

import { createUserAndGenerateTokens, findUserByEmail } from "@/shared/lib/utils/auth"
import { handleError } from "@/shared/lib/utils/error"
import type { RegistrationUserParams } from "@/types/user.actions.type"

export async function POST(req: NextRequest) {
  try {
    const user: RegistrationUserParams = await req.json()
    const findUser = await findUserByEmail(user.email)

    if (findUser !== null)
      return NextResponse.json({ error: "This email address is already used by" }, { status: 500 })

    const token = await createUserAndGenerateTokens(user)

    return NextResponse.json({ user_token: token })
  } catch (error) {
    handleError(error)
    return NextResponse.json({ error: "User is not created" }, { status: 500 })
  }
}
