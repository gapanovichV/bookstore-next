"use client"

import toast from "react-hot-toast"
import clsx from "clsx"
import { useRouter } from "next/navigation"

import { Card } from "@/components/elements/Card/Card"
import { useUserLogout } from "@/hooks/useUserLogout"
import { RouteEnum } from "@/types/route.type"

const MainPage = () => {
  const router = useRouter()
  const handleLogout = useUserLogout()
  const text = () => {
    toast.error("Error")
  }
  return (
    <main className={clsx("container")}>
      Main page
      <div>

        <button onClick={() => router.push(RouteEnum.SIGN_IN)}>Login</button>
        <button onClick={() => router.push(RouteEnum.SIGN_UP)}>Registration</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={text}>toast</button>
        <div className={"test"}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>
    </main>
  )
}

export default MainPage
