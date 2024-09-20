import type { ProductItem } from "@prisma/client"

export interface allGetBooksParams {
  loading: boolean
  books: ProductItem[]
}

export interface oneGetBookParams {
  loading: boolean
  book: ProductItem | Record<string, never>
}
