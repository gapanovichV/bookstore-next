import axiosInstance from "@/shared/services/instance"

export const addCommentToBook = async (value: any) => {
  return (await axiosInstance.post("/api/comments", value)).data
}
