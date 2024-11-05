"use server"

import { cookies } from "next/headers"

interface StoreTokenRequest {
  accessToken: string
  refreshToken: string
}

enum Token {
  ACCESS_TOKEN = "accessToken",
  REFRESH_TOKEN = "refreshToken"
}

export const storeToken = async (request: StoreTokenRequest) => {
  cookies().set({
    name: Token.ACCESS_TOKEN,
    value: request.accessToken,
    httpOnly: true,
    sameSite: "strict",
    secure: true
  })

  cookies().set({
    name: Token.REFRESH_TOKEN,
    value: request.refreshToken,
    httpOnly: true,
    sameSite: "strict",
    secure: true
  })
}

export const deleteAccessToken = async () => {
  cookies().delete(Token.ACCESS_TOKEN)
}
export const deleteRefreshToken = async () => {
  cookies().delete(Token.REFRESH_TOKEN)
}

export const deleteToken = async () => {
  await deleteAccessToken()
  await deleteRefreshToken()
}

export const getAccessTokenFromCookies = async () => {
  return cookies().get(Token.ACCESS_TOKEN)?.value
}
export const getRefreshTokenFromCookies = async () => {
  return cookies().get(Token.REFRESH_TOKEN)?.value
}

export const getTokenFromCookies = async () => {
  await getAccessTokenFromCookies()
  await getRefreshTokenFromCookies()
}


