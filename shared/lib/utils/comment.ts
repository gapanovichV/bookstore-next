import { prisma } from "@/prisma/prisma-client"

export const findUserCommentOrCreate = async (token: string, userId: number) => {
  let userComment = await prisma.comment.findFirst({
    where: {
      userId
    }
  })
  if (!userComment) {
    userComment = await prisma.comment.create({
      data: {
        userId,
        token
      }
    })
  }
  return userComment
}
