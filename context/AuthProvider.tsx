"use client"

import React, { createContext, useEffect, useState } from "react"
import type { User } from "@prisma/client"

import { getAccessTokenFromCookies } from "@/shared/lib/storeToken"
import { Api } from "@/shared/services/api-client"

interface AuthContextProps {
  auth: boolean
  user: User | null
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}
const AuthContext = createContext<AuthContextProps>({
  auth: false,
  user: null,
  setAuth: () => {},
  setUser: () => {}
})

export const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [auth, setAuth] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    async function fetchUser() {
      const token = await getAccessTokenFromCookies()
      if (!token) {
        console.error("Token not found")
        return
      }
      const res = await Api.auth.loginCheck(token)
      if (res.user) {
        setUser(res.user)
        setAuth(true)
      } else {
        console.error("User not found in response")
      }
    }
    fetchUser().catch((r) => console.error(r))
  }, [])

  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
