import type { ProductItem } from "@prisma/client"

import type { Status } from "@/types/response.type"

export interface allGetBooksParams {
  status: Status
  books: ProductItem[]
}

export interface oneGetBookParams {
  status: Status
  book: ProductItem | Record<string, never>
}
