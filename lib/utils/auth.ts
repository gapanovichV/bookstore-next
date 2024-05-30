import User from "@/lib/database/models/user.model"

export const findUserByEmail = async (email: string) => {
  return User.findOne({ email })
}
