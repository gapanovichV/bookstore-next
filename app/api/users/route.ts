import { type NextRequest, NextResponse } from "next/server"

import { findByUser } from "@/shared/lib/utils/users"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const user = await findByUser(data.userId)

    return NextResponse.json({ user })
  } catch (error) {
    console.error(`[USERS POST] Error:`, error)
    return NextResponse.json({ error: "ERROR" }, { status: 500 })
  }
}
