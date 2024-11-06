import { type NextRequest, NextResponse } from "next/server"

import { findUserByEmail, isValidAccessToken, parseJwt } from "@/shared/lib/utils/auth"
import type { UserWithRelations } from "@/types/prisma"

export async function POST(req: NextRequest) {
  try {
    const {token}: {token: string} = await req.json()

    const validatedTokenResult = await isValidAccessToken(token)

    if (validatedTokenResult.status !== 200) {
      return NextResponse.json(validatedTokenResult)
    }

    const userEmail = parseJwt(token).email
    const user: UserWithRelations | null = await findUserByEmail(userEmail);

    if (user === null) {
      return NextResponse.json({ message: "User not found" });
    }

    return NextResponse.json({
      status: 200,
      message: "JWT token is valid",
      user: {
        id: user.id,
        lastName: user.lastName,
        firstName: user.firstName,
        email: user.email,
      }
    })

  } catch (error) {
    console.error(`[USERS LOGIN-CHECK POST] Error:`, error)
    return NextResponse.json({ error: "[USERS LOGIN-CHECK POST] Error" })
  }
}

export const dynamic = 'force-dynamic'