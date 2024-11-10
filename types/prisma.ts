import type { Comment, CommentItems, ProductItem, User } from "@prisma/client"

export type ProductWithRelations = ProductItem & {
  comments?: Array<ArrayCommentAndUser>
}

export type ArrayCommentAndUser = CommentItems & {
  comment: Comment & {
    user: Pick<User, "lastName" | "firstName">
  }
}

export type UserWithRelations =
  | (User & {
      comment?:
        | (Comment & {
            comments?: CommentItems[] | null // Это массив комментариев, который может быть null
          })
        | null // Комментарий может быть null
    })
  | null // Сам пользователь может быть null

export interface CreateItemValue {
  userId: number
  productItemId: number
}

export interface CreateCommentValues extends CreateItemValue {
  commentText: string
  estimation: number
}

export interface CreateCartItemValues extends CreateItemValue {
  quantityBook: number
}
