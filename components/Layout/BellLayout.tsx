"use client"

import React, { useEffect } from "react"
import clsx from "clsx"
import { useRouter } from "next/navigation"

import type { ITab } from "@/components/elements/Tab/Tab"
import { Header, Sidebar } from "@/components/modules"
import { useTab } from "@/hooks/useTab"
import { RouteEnum } from "@/types/route.type"

import styles from "./BellLayout.module.scss"

interface BellLayoutProps {
  children?: React.ReactNode
}
const BellLayout = ({ children }: BellLayoutProps) => {
  const router = useRouter()

  const SidebarTabs: ITab[] = [
    { id: 1, label: "Notification", tag: false },
    { id: 2, label: "Purchase", tag: false },
    { id: 3, label: "Your Review", tag: false }
  ]
  const { currentItem, changeItem } = useTab(0, SidebarTabs)

  useEffect(() => {
    switch (currentItem.id) {
      case 1:
        router.push(RouteEnum.NOTIFICATION)
        break
      case 2:
        router.push(RouteEnum.PURCHASE)
        break
      case 3:
        router.push(RouteEnum.YOUR_REVIEW)
        break
      default:
    }
  }, [currentItem.id])

  return (
    <>
      <Header />
      <main>
        <div className={clsx("container")}>
          <div className={clsx(styles.content)}>
            <Sidebar currentItem={currentItem} changeItem={changeItem} tabs={SidebarTabs} />
            <div className={clsx(styles.content__wrapper)}>{children}</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default BellLayout
