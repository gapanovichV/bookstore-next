import { prisma } from "@/prisma/prisma-client"

export const findBooksByCategory = async (category: string | string[] | undefined) => {
  return prisma.productItem.findMany({
    orderBy: {
      id: "desc"
    },
    where: {
      categories: {
        hasSome: (category as string).split(",")
      }
    }
  })
}

export const findBookById = async (id: number) => {
  return prisma.productItem.findFirst({
    where: { id },
    include: {
      comments: {
        where: { productItemId: id },
        include: { comment: { include: { user: { select: { firstName: true, lastName: true } } } } }
      }
    }
  })
}

export const getAllBook = async () => {
  return prisma.productItem.findMany()
}

export const getBooksQuantity = async () => {
  return prisma.productItem.count()
}
