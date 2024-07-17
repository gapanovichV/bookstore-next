import type { Document } from "mongoose"
import { model, models, Schema } from "mongoose"

export interface BookParams extends Document {
  _id: string
  title: string
  authors: string[]
  publisher: string
  publishedDate: Date
  description: string
  pageCount: number
  categories: string[]
  imageUrl: string
  language: string
  price: number
  oldPrice: number
  isbn: number
  stock: number
}

const bookSchema = new Schema<BookParams>({
  title: { type: String },
  authors: { type: [String], default: [] },
  publisher: { type: String },
  publishedDate: { type: Date },
  description: { type: String },
  pageCount: { type: Number },
  categories: { type: [String], default: [] },
  imageUrl: { type: String },
  language: { type: String },
  price: { type: Number },
  oldPrice: { type: Number },
  isbn: { type: Number },
  stock: { type: Number }
})

const Book = models.Book || model("Book", bookSchema)

export default Book
