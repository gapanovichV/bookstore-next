import { NextResponse } from "next/server"

import Book from "@/lib/database/models/book.model"
import { getDbAndReqBody } from "@/lib/utils/getDbAndReqBody"
import type { StatusResponse } from "@/types/response.type"
import { Status } from "@/types/response.type"

export async function POST(req: Request): Promise<NextResponse<StatusResponse>> {
  try {
    const { reqBody } = await getDbAndReqBody(req)
    await Book.create({ ...reqBody })

    return NextResponse.json({
      status: Status.Success,
      message: "ADD successfully completed"
    })
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
