import type { Book } from "@prisma/client"

import type { Status } from "@/types/response.type"

export interface allGetBooksParams {
  status: Status
  books: Book[]
}

export interface oneGetBookParams {
  status: Status
  book: Book | Record<string, never>
}
