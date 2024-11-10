import { type NextRequest, NextResponse } from "next/server"

import { prisma } from "@/prisma/prisma-client"
import { findBookById } from "@/shared/lib/utils/book"
import { findUserCommentOrCreate } from "@/shared/lib/utils/comment"
import type { CreateCommentValues } from "@/types/prisma"

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as CreateCommentValues

    const userComment = await findUserCommentOrCreate(data.userId)

    const findProductItem = await findBookById(data.productItemId)

    if (findProductItem) {
      const existingComment = await prisma.commentItems.findFirst({
        where: {
          comment: {
            userId: data.userId,
          },
          productItemId: data.productItemId
        }
      })

      if (existingComment) {
        return NextResponse.json(
          { error: "You have already left a comment on this product." },
          { status: 400 }
        )
      }

      await prisma.commentItems.create({
        data: {
          commentId: userComment.id,
          productItemId: data.productItemId,
          commentText: data.commentText,
          estimation: data.estimation
        }
      })

      return NextResponse.json({ message: "Successfully comment added" })
    }
  } catch (error) {
    console.error(`[Comments POST] Error:`, error)
    return NextResponse.json({ error: "ERROR" }, { status: 500 })
  }
}
