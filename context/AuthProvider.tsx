"use client"

import React, { createContext, useState } from "react"
import type { User } from "@prisma/client"

interface AuthContextProps {
  auth: boolean
  user: User | NonNullable<unknown>
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
  setUser: React.Dispatch<React.SetStateAction<User>>
}
const AuthContext = createContext<AuthContextProps>({
  auth: false,
  user: { },
  setAuth: () => {},
  setUser: () => {}
})

export const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [auth, setAuth] = useState<boolean>(false)
  const [user, setUser] = useState<User | NonNullable<unknown>>({ })

  return <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>{children}</AuthContext.Provider>
}

export default AuthContext
