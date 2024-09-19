import { type NextRequest, NextResponse } from "next/server"

import { findBookById } from "@/shared/lib/utils/book"
import { handleError } from "@/shared/lib/utils/error"
import { Status, type StatusResponse } from "@/types/response.type"

export async function POST(req: NextRequest): Promise<NextResponse<StatusResponse>> {
  try {
    const body = await req.json()

    const foundBook = await findBookById(body.bookId)

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
