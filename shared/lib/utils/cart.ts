import { prisma } from "@/prisma/prisma-client"

export const findUserCartOrCreate = async (userId: number) => {
  let userCart = await prisma.comment.findFirst({
    where: {
      userId
    }
  })
  if (!userCart) {
    userCart = await prisma.comment.create({
      data: {
        userId
      }
    })
  }
  return userCart
}
