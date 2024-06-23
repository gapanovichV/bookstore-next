"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import clsx from "clsx"
import { useRouter } from "next/navigation"

import { Card } from "@/components/elements/Card/Card"
import { PurchaseCard } from "@/components/elements/PurchaseCard/PurchaseCard"
import { Tab } from "@/components/elements/Tab/Tab"
import { Tag } from "@/components/elements/Tag/Tag"
import { useUserLogout } from "@/hooks/useUserLogout"
import { RouteEnum } from "@/types/route.type"

const MainPage = () => {
  const router = useRouter()
  const handleLogout = useUserLogout()


  const tabs = [
    { id: 1, label: "All Books" },
    { id: 2, label: "What’s new" },
    { id: 3, label: "Popular" }
  ]
  const [selectedTabId, setSelectedTabId] = useState<string | number>(tabs[0].id)

  const handleTabClick = (e: React.MouseEvent, id: number | string) => {
    e.stopPropagation()
    setSelectedTabId(id)
  }

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
          <Tab position="horizontal" tabs={tabs} onClick={(e, id ) => handleTabClick(e, id)} selectedTabId={selectedTabId}/>
        </div>
      </div>
    </main>
  )
}

export default MainPage
