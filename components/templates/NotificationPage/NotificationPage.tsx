"use client"

import type { ReactElement } from "react";
import React from "react"
import clsx from "clsx"

import type { ITab } from "@/components/elements/Tab/Tab"
import { NotificationContent, PurchaseContent, Sidebar } from "@/components/modules"
import { useTab } from "@/hooks/useTab"

import styles from "./NotificationPage.module.scss"

interface NotificationPageProps {
  className?: string
  children?: React.ReactNode
}
const NotificationPage = ({ className }: NotificationPageProps) => {
  const SidebarTabs: ITab[] = [
    { id: 1, label: "Notification", tag: false },
    { id: 2, label: "Purchase", tag: false },
    { id: 3, label: "Your Review", tag: false }
  ]
  const { currentItem, changeItem } = useTab(0, SidebarTabs)

  const content = (): ReactElement => {
    switch (currentItem.id) {
      case 1:
        return <NotificationContent />
      case 2:
        return <PurchaseContent />
      case 3:
        return <div>555</div>
      default:
        return <NotificationContent />
    }
  }
  return (
    <>
      <main className={clsx(className)}>
        <div className={clsx("container")}>
          <div className={clsx(styles.content)}>
            <Sidebar currentItem={currentItem} changeItem={changeItem} tabs={SidebarTabs} />
            <div className={clsx(styles.content__wrapper)}>{content()}</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotificationPage
