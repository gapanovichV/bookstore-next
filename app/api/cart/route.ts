import { type NextRequest, NextResponse } from "next/server"

import { prisma } from "@/prisma/prisma-client"
import { findUserCartOrCreate } from "@/shared/lib/utils/cart"
import type { CreateCartItemValues } from "@/types/prisma"

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as CreateCartItemValues
    
    const userCart = await findUserCartOrCreate(1)

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId
      }
    })

    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id
        },
        data: {
          quantity: findCartItem.quantity + data.quantityBook
        }
      })
    }
    if (!findCartItem) {
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productItemId: data.productItemId,
          quantity: data.quantityBook,
        }
      })
    }


  } catch (error) {
    console.error(`[Cart POST] Error:`, error)
    return NextResponse.json({ error: "ERROR" }, { status: 500 })
  }
}