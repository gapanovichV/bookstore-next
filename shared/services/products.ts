import type { ProductItem } from "@prisma/client"

import axiosInstance from "@/shared/services/instance"
import type { allGetBooksParams, oneGetBookParams } from "@/types/books.type"

export const getAllBooks = async (): Promise<allGetBooksParams> => {
  return (await axiosInstance.get<allGetBooksParams>("/books/allBooks")).data
}

export const takeOneBook = async (id: number): Promise<oneGetBookParams> => {
  return (await axiosInstance.post<oneGetBookParams>(`/books/oneBook`, { id })).data
}

export const searchInput = async (query: string): Promise<ProductItem[]> => {
  return (await axiosInstance.get<ProductItem[]>("/books/search", { params: { query } })).data
}
