import { NextResponse } from "next/server"

import { getAllBook } from "@/shared/lib/utils/book"
import { handleError } from "@/shared/lib/utils/error"
import { Status, type StatusResponse } from "@/types/response.type"

export async function GET(): Promise<NextResponse<StatusResponse>> {
  try {
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
    return NextResponse.json({ status: Status.Error, error: "Server error" })
  }
}
