import { NextResponse } from "next/server"

import { getAllBook } from "@/lib/utils/book"
import { handleError } from "@/lib/utils/error"
import { getDbAndReqBody } from "@/lib/utils/getDbAndReqBody"
import type { StatusResponse } from "@/types/response.type"
import { Status } from "@/types/response.type"

export async function GET(): Promise<NextResponse<StatusResponse>> {
  try {
    await getDbAndReqBody()
    const books = await getAllBook()

    if (!books)
      return NextResponse.json({
        status: Status.Error,
        message: "Books not found"
      })

    return NextResponse.json({
      status: Status.Success,
      books
    })
  } catch (error) {
    handleError(error)
    return NextResponse.json({ status: Status.Error, message: "Books search error" })
  }
}
