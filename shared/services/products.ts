import type { ProductItem } from "@prisma/client"

import axiosInstance from "@/shared/services/instance"

export const getAllBooks = async () => {
  return axiosInstance.get<ProductItem[]>("/books/allBooks")
}

export const takeOneBook = async (id: number) => {
  return (await axiosInstance.post(`/books/oneBook/`, { id })).data
}
