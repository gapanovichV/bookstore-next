import { prisma } from "@/prisma/prisma-client"

export const findBookById = async (bookId: number) => {
  return prisma.book.findFirst({ where: { id: bookId } })
}

export const getAllBook = async () => {
  return prisma.book
}
