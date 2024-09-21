import axiosInstance from "@/shared/services/instance"

export const getUser = async (userId: number) => {
  return (await axiosInstance.post("/users/", userId)).data
}
