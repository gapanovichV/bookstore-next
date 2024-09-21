import type { ProductItem } from "@prisma/client"

import type { ProductWithRelations } from "@/types/prisma"

export interface allGetBooksParams {
  loading: boolean
  books: ProductItem[]
}

export interface oneGetBookParams {
  loading: boolean
  book: ProductWithRelations | Record<string, never>
}
