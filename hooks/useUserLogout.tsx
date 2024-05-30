import { useContext, useState } from "react"
import { useRouter } from "next/navigation"

import { LOCAL_STORAGE_KEY } from "@/constants"
import AuthContext from "@/context/AuthProvider"
import { deleteToken } from "@/lib/storeToken"

export const useUserLogout = () => {
  const { setAuth } = useContext(AuthContext)
  const router = useRouter()

  return async () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    await deleteToken()
    setAuth(true)
    router.push("/")
    window.location.reload()
  }
}
