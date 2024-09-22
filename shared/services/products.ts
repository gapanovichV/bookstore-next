import axiosInstance from "@/shared/services/instance"
import type { allGetBooksParams } from "@/types/books.type"

export const getAllBooks = async (): Promise<allGetBooksParams> => {
  return (await axiosInstance.get<allGetBooksParams>("/books/allBooks")).data
}

export const takeOneBook = async (id: number) => {
  return (await axiosInstance.post(`/books/oneBook`, { id })).data
}

export const searchInput = async (query: string) => {
  return (await axiosInstance.get("/books/search", { params: { query } })).data
}
