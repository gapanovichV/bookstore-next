import type { Comment,CommentItems, ProductItem, User } from "@prisma/client"

export type ProductWithRelations = ProductItem & { commentItems: CommentItems[] }


export type UserWithRelations = User & { comment: CommentWithRelations }


export type CommentWithRelations = Comment & { comments: CommentItems[]}




