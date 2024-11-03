import { type NextRequest, NextResponse } from "next/server"

import { prisma } from "@/prisma/prisma-client"
import { findBookById } from "@/shared/lib/utils/book"
import { findUserCommentOrCreate } from "@/shared/lib/utils/comment"
import type { CreateCommentValues } from "@/types/prisma"

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as CreateCommentValues

    const userId = 1;
    const userComment = await findUserCommentOrCreate(userId)

    const findProductItem = await findBookById(data.productItemId)

    if (findProductItem) {
      const existingComment = await prisma.commentItems.findFirst({
        where: {
          comment: {
            userId
          },
          productItemId: data.productItemId,
        },
      });

      if (existingComment) {
        return NextResponse.json({ error: "Вы уже оставили комментарий к этому продукту." }, { status: 400 });
      }

      await prisma.commentItems.create({
        data: {
          commentId: userComment.id,
          productItemId: data.productItemId,
          commentText: data.commentText,
          estimation: data.estimation,
        },
      });

      return NextResponse.json({ message: "Комментарий успешно добавлен" });
    }

    return NextResponse.json({ message: "Successfully comment added" })
  } catch (error) {
    console.error(`[Comments POST] Error:`, error)
    return NextResponse.json({ error: "ERROR" }, { status: 500 })
  }
}
