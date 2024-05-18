import type { Document } from "mongoose"
import { model, models, Schema } from "mongoose"

export interface UserParams extends Document {
  _id: string
  email: string
  password: string
  firstName: string
  lastName: string
}

const userSchema = new Schema<UserParams>({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
})

const User = models.User || model("User", userSchema)

export default User
