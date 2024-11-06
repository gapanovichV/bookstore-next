import type { FormLoginSchema } from "@/shared/components/modules/LoginForm/LoginForm"
import type { FormRegistrationSchema } from "@/shared/components/modules/RegistrationForm/RegistrationForm"
import axiosInstance from "@/shared/services/instance"

export const loginUser = async (value: FormLoginSchema) => {
  return (await axiosInstance.post("/users/login", value)).data
}

export const registrationUser = async (value: FormRegistrationSchema) => {
  return (await axiosInstance.post("/users/signup", value)).data
}

export const loginCheck = async (token: string) => {
  return (await axiosInstance.post("/users/login-check", token)).data
}