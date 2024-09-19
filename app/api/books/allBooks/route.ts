import { NextResponse } from "next/server"

import { getAllBook } from "@/shared/lib/utils/book"
import { handleError } from "@/shared/lib/utils/error"
import { Status } from "@/types/response.type"

export async function GET() {
  try {
    const books = await getAllBook()

    if (!books) return NextResponse.json({ error: "Books not found" }, { status: 500 })

    return NextResponse.json({ status: Status.Success, books }, { status: 200 })
  } catch (error) {
    handleError(error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
