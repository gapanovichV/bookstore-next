import type { Comment, CommentItems, ProductItem, User } from "@prisma/client"

export type ProductWithRelations = ProductItem & {
  comments: Array<ArrayCommentAndUser>
}

export type ArrayCommentAndUser = CommentItems & {
  comment: Comment & {
    user: User
  }
}
