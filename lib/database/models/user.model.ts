import type { Document } from "mongoose"
import { model, models, Schema } from "mongoose"

export enum UserRole {
  ADMIN = "admin",
  USER = "user"
}
enum UserGender {
  MALE = "male",
  FEMALE = "female"
}

export interface UserParams extends Document {
  _id: string
  email: string
  password: string
  lastName: string
  firstName: string
  role: UserRole
  gender: UserGender
  phone: number
  imageUrl: string
}

const userSchema = new Schema<UserParams>({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  role: { type: String, enum: UserRole, default: UserRole.USER },
  gender: { type: String, enum: UserGender },
  phone: { type: Number },
  imageUrl: { type: String }
})
const User = models.User || model("User", userSchema)

export default User
