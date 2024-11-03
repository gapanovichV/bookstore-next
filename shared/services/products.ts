import type { ProductItem } from "@prisma/client"

import axiosInstance from "@/shared/services/instance"

export const searchInput = async (query: string): Promise<ProductItem[]> => {
  return (await axiosInstance.get<ProductItem[]>("/books/search", { params: { query } })).data
}
