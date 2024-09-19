import { type NextRequest, NextResponse } from "next/server"

import { prisma } from "@/prisma/prisma-client"
import { Status, type StatusResponse } from "@/types/response.type"

export async function POST(req: NextRequest): Promise<NextResponse<StatusResponse>> {
  try {
    const body = await req.json()

    await prisma.productItem.create({
      data: {
        ...body
      }
    })

    return NextResponse.json({
      status: Status.Success,
      message: "ADD successfully completed"
    })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
