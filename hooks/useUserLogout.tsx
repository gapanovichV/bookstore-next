import { useState } from "react"
import { useRouter } from 'next/navigation'

import { LOCAL_STORAGE_KEY } from "@/constants"

export const useUserLogout = () => {
  // TODO: Create context setAuth
  const [auth, setAuth] = useState(false)
  const router = useRouter()

  return () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    setAuth(false)
    router.push('/')
    window.location.reload()
  }
}