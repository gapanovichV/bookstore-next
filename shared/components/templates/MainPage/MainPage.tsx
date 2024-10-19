"use client"

import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"
import clsx from "clsx"
import { useRouter } from "next/navigation"

import { Button, CheckList, Dropdown, PurchaseCard, ReviewCard } from "@/shared/components/elements"
import { ReviewBookDetail } from "@/shared/components/elements/ReviewBookDetail/ReviewBookDetail"
import { useUserLogout } from "@/shared/hooks/useUserLogout"
import { Api } from "@/shared/services/api-client"
import type { oneGetBookParams } from "@/types/books.type"
import { RouteEnum } from "@/types/route.type"

import styles from "@/shared/components/templates/BookDetail/BookDetail.module.scss"

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
          <CheckList label="Select" />
        </div>
      </div>
    </main>
  )
}

export default MainPage
