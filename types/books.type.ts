import type { ProductItem } from "@prisma/client"

import type { ProductWithRelations } from "@/types/prisma"

export interface allGetBooksParams {
  loading: boolean
  quantity: number
  books: ProductItem[]
}

export interface oneGetBookParams {
  loading: boolean
  book: ProductWithRelations | null
}
