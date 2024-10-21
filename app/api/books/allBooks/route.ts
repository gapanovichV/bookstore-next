import { type NextRequest, NextResponse } from "next/server"

import { getAllBook } from "@/shared/lib/utils/book"

export async function GET(req: NextRequest) {
  try {
    const books = await getAllBook()

    if (!books) return NextResponse.json({ error: "Books not found" }, { status: 500 })

    return NextResponse.json({ books }, { status: 200 })
  } catch (error) {
    console.error(`[Books AllBooks] Error:`, error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
