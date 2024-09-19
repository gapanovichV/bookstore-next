import { type NextRequest, NextResponse } from "next/server"

import { findBookById } from "@/shared/lib/utils/book"
import { handleError } from "@/shared/lib/utils/error"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const foundBook = await findBookById(body.id)

    if (!foundBook) return NextResponse.json({ error: "The book was not found" })

    return NextResponse.json({ book: foundBook })
  } catch (error) {
    handleError(error)
    return NextResponse.json({ error: "Book search error" }, { status: 500 })
  }
}
