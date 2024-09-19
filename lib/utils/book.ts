import { prisma } from "@/prisma/prisma-client"

export const findBookById = async (bookId: string) => {
  console.log(bookId)
  return prisma.productItem.findFirst({ where: { id: Number(bookId) } })
}

export const getAllBook = async () => {
  return prisma.productItem.findMany()
}
