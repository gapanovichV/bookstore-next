import { prisma } from "@/prisma/prisma-client"

export const findBookById = async (id: number) => {
  return prisma.productItem.findFirst({
    where: { id },
    include: {
      comments: {
        where: { productItemId: id },
        include: { comment: { include: { user: { select: { firstName: true } } } } }
      }
    }
  })
}

export const getAllBook = async () => {
  return prisma.productItem.findMany()
}
