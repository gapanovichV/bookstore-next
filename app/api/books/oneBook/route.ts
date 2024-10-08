import { type NextRequest, NextResponse } from "next/server"

import { findBookById } from "@/shared/lib/utils/book"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const book = await findBookById(body.id)

    if (!book) return NextResponse.json({ error: "The book was not found" })

    return NextResponse.json({ loading: false, book })
  } catch (error) {
    console.error(`[Books OneBook] Error:`, error)
    return NextResponse.json({ error: "Book search error" }, { status: 500 })
  }
}
