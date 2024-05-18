import type { Document } from "mongoose"
import { model, models, Schema } from "mongoose"

export interface UserParams extends Document {
  _id: string
  email: string
  password: string
  fullName: string
}

const userSchema = new Schema<UserParams>({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true }
})

const User = models.User || model("User", userSchema)

export default User
