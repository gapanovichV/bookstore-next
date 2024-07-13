import { ObjectId } from "mongodb"

import Book from "@/lib/database/models/book.model"

export const findBookById = async (bookId: string) => {
  return Book.findOne({ _id: new ObjectId(bookId) })
}

export const getAllBook = async () => {
  return Book.find()
}
