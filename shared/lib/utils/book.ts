import { prisma } from "@/prisma/prisma-client"

export interface searchParams {
  category: string | string[] | undefined
}

export const findBooksByCategory = async (params: searchParams) => {
  return prisma.productItem.findMany({
    orderBy: {
      id: "desc"
    },
    where: {
      categories: {
        hasSome: (params.category as string).split(",")
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
