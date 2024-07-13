import type { BookParams } from "@/lib/database/models/book.model"
import type { Status } from "@/types/response.type"

export interface allGetBooksParams {
  status: Status
  books: BookParams[]
}
