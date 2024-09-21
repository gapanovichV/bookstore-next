import crypto from "crypto"
import { type NextRequest, NextResponse } from "next/server"

import { prisma } from "@/prisma/prisma-client"
import { CART_TOKEN_COOKIES } from "@/shared/constants"
import { findBookById } from "@/shared/lib/utils/book"
import { findUserCommentOrCreate } from "@/shared/lib/utils/comment"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    let token = req.cookies.get(CART_TOKEN_COOKIES)?.value
    if (!token) {
      token = crypto.randomUUID()
    }
    const userComment = await findUserCommentOrCreate(token, 4)

    const findProductItem = await findBookById(data.productItemId)

    if (findProductItem) {
      await prisma.commentItems.create({
        data: {
          commentId: userComment.id,
          productItemId: data.productItemId,
          commentText: data.commentText,
          estimation: data.estimation
        }
      })
    }

    return NextResponse.json({ message: "Successfully comment added" })
  } catch (error) {
    console.error(`[Comments POST] Error:`, error)
    return NextResponse.json({ error: "ERROR" }, { status: 500 })
  }
}
