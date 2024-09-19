import { type NextRequest, NextResponse } from "next/server"

import { prisma } from "@/prisma/prisma-client"
import { handleError } from "@/shared/lib/utils/error"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    await prisma.productItem.create({
      data: {
        ...body
      }
    })

    return NextResponse.json({ message: "Add successfully completed" })
  } catch (error) {
    handleError(error)
    NextResponse.json({ error: "Post failed" }, { status: 500 })
  }
}
