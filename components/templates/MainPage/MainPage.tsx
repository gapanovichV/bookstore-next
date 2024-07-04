"use client"

import type { ChangeEvent } from "react"
import React, { useState } from "react"
import toast from "react-hot-toast"
import clsx from "clsx"
import { useRouter } from "next/navigation"

import { Card } from "@/components/elements/Card/Card"
import { CheckList } from "@/components/elements/CheckList/CheckList"
import { PurchaseCard } from "@/components/elements/PurchaseCard/PurchaseCard"
import { Tab } from "@/components/elements/Tab/Tab"
import { Tag } from "@/components/elements/Tag/Tag"
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
        <div className={"test-tag"}>
          <Tag status={false}>NEW!</Tag>
          <Tag status={true}>NEW!</Tag>
          <Tag status={false}>DONE</Tag>
          <Tag status={true} color="green">
            DONE
          </Tag>
          <Tag status={true} color="red">
            Processed
          </Tag>
          <Tag status={true} color="yellow">
            SHIPPED
          </Tag>
        </div>

        <div className={"test"}>
          <Card size="medium" />
          <Card size="medium" />
          <Card size="medium" />
          <Card size="medium" />
          <Card size="medium" />
        </div>
        <PurchaseCard />

        <div className={"test-tab"}>
          <Tab
            position="horizontal"
            tabs={tabs}
            currentItem={currentItem}
            changeItem={changeItem}
          />
        </div>
        <div className={"checkList"}>
          <CheckList label="Select" />
        </div>
      </div>
    </main>
  )
}

export default MainPage
