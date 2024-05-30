"use client"

import React, { createContext, useState } from "react"

interface AuthContextProps {
  auth: boolean
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
}
const AuthContext = createContext<AuthContextProps>({
  auth: false,
  setAuth: () => {}
})

export const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [auth, setAuth] = useState(false)

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

export default AuthContext
