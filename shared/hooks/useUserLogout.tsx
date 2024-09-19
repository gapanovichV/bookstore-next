import { useContext, useState } from "react"
import { useRouter } from "next/navigation"

import AuthContext from "@/context/AuthProvider"
import { LOCAL_STORAGE_KEY } from "@/shared/constants"
import { deleteToken } from "@/shared/lib/storeToken"

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
