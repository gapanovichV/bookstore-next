import { type NextRequest, NextResponse } from "next/server"

import { findBooksByCategory, getAllBook } from "@/shared/lib/utils/book"

export async function POST(req: NextRequest) {
  const data = await req.json()
  try {
    let books

    if (Object.keys(data).length === 0) {
      books = await getAllBook()
    } else {
      books = await findBooksByCategory(data)
    }

    if (!books) return NextResponse.json({ error: "Books not found" }, { status: 500 })

    return NextResponse.json({ books }, { status: 200 })
  } catch (error) {
    console.error(`[Books AllBooks] Error:`, error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
