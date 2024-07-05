import { NextResponse } from "next/server"

import { findBookById } from "@/lib/utils/book"
import { handleError } from "@/lib/utils/error"
import { getDbAndReqBody } from "@/lib/utils/getDbAndReqBody"
import type { StatusResponse } from "@/types/response.type"
import { Status } from "@/types/response.type"

export async function POST(req: Request): Promise<NextResponse<StatusResponse>> {
  try {
    const { reqBody } = await getDbAndReqBody(req)
    const { bookId } = reqBody

    const foundBook = await findBookById(bookId)

    if (!foundBook)
      return NextResponse.json({
        status: Status.Error,
        message: "The book was not found"
      })

    return NextResponse.json({
      status: Status.Success,
      message: "The book was found",
      book: foundBook
    })
  } catch (error) {
    handleError(error)
    return NextResponse.json({ status: Status.Error, message: "Book search error" })
  }
}
