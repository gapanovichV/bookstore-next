"use server"

import { cookies } from "next/headers"

interface StoreTokenRequest {
  accessToken: string
  refreshToken: string
}

export const storeToken = async (request: StoreTokenRequest) => {
  cookies().set({
    name: "accessToken",
    value: request.accessToken,
    httpOnly: true,
    sameSite: "strict",
    secure: true
  })

  cookies().set({
    name: "refreshToken",
    value: request.refreshToken,
    httpOnly: true,
    sameSite: "strict",
    secure: true
  })
}

export const deleteToken = async () => {
  cookies().delete("accessToken")
  cookies().delete("refreshToken")
}
