"use client"

import React from "react"
import toast from "react-hot-toast"
import clsx from "clsx"
import { useRouter } from "next/navigation"

import {
  CheckList,
  Dropdown,
  InfoIllustration,
  PurchaseCard,
  ReviewCard,
  Tab,
  Tag
} from "@/components/elements"
import { ReviewBookDetail } from "@/components/elements/ReviewBookDetail/ReviewBookDetail"
import { useTab } from "@/hooks/useTab"
import { useUserLogout } from "@/hooks/useUserLogout"
import { RouteEnum } from "@/types/route.type"

const MainPage = () => {
  const router = useRouter()
  const handleLogout = useUserLogout()
  const tabs = [{ label: "All Books" }, { label: "What’s new" }, { label: "Popular" }]
  const { currentItem, changeItem } = useTab(0, tabs)

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
          <Tab
            position="horizontal"
            tabs={tabs}
            currentItem={currentItem}
            changeItem={changeItem}
          />
        </div>
        <div className={"test"}>
          <CheckList label="Select" />
        </div>
        <div className={"test"}>
          <Dropdown />
        </div>
        <div className={"test test_col"}>
          <ReviewCard />
        </div>
        <div className={"test test_col"}>
          <PurchaseCard />
        </div>
        <div className={"test"}>
          <ReviewBookDetail />
        </div>
      </div>
    </main>
  )
}

export default MainPage
