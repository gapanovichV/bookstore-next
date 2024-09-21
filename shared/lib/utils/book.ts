import { prisma } from "@/prisma/prisma-client"

export const findBookById = async (id: number) => {
  return prisma.productItem.findFirst({
    where: { id },
    include: {
      commentItems: { where: { productItemId: id } }
    }
  })
}

export const getAllBook = async () => {
  return prisma.productItem.findMany()
}
