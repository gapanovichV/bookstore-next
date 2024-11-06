import { type NextRequest, NextResponse } from "next/server"

import type { FormRegistrationSchema } from "@/shared/components/modules/RegistrationForm/RegistrationForm"
import { createUserAndGenerateTokens, findUserByEmail } from "@/shared/lib/utils/auth"

export async function POST(req: NextRequest) {
  try {
    const user: FormRegistrationSchema = await req.json()
    const findUser = await findUserByEmail(user.email)

    if (findUser !== null)
      return NextResponse.json({ error: "This email address is already used by" }, { status: 500 })

    const token = await createUserAndGenerateTokens(user)

    return NextResponse.json({ token })
  } catch (error) {
    console.error(`[Users SignUp] Error:`, error)
    return NextResponse.json({ error: "User is not created" })
  }
}
