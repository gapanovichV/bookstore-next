import { prisma } from "@/prisma/prisma-client"

export const findByUser = async (userId: number) => {
  return prisma.user.findUnique({
    where: { id: userId },
    include: {
      comment: {
        where: { userId },
        include: {
          comments: true
        }
      }
    }
  })
}
