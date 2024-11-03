import { prisma } from "@/prisma/prisma-client"

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

export const getBooksQuantity = async () => {
  return prisma.productItem.count()
}

export const getBooks = async (category?: string | string[], sortByIdAscDesc: "asc" | "desc" = "asc") => {
  return prisma.productItem.findMany({
    orderBy: { id: sortByIdAscDesc },
    where: category ? {
      categories: {
        hasSome: Array.isArray(category) ? category : category.split(",")
      }
    } : undefined
  });
};