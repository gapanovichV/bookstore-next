"use client"

import React from "react"
import clsx from "clsx"

import type { ITab } from "@/shared/components/elements/Tab/Tab"
import { DiscoverContent, Sidebar, Topbar } from "@/shared/components/modules"
import { useTab } from "@/shared/hooks/useTab"

import styles from "./DiscoverPage.module.scss"

const DiscoverPage = () => {
  const SidebarTabs: ITab[] = [
    { id: 1, label: "Fiction & Literature", tag: false },
    { id: 2, label: "Non Fiction", tag: false },
    { id: 3, label: "Comic", tag: false },
    { id: 4, label: "Children Book", tag: false }
  ]
  const { currentItem, changeItem } = useTab(0, SidebarTabs)

  return (
    <main>
      <div className={clsx(styles.tab)}>
        <div className={clsx("container")}>
          <Topbar />
        </div>
      </div>
      <div className={clsx("container")}>
        <div className={clsx(styles.content)}>
          <Sidebar currentItem={currentItem} changeItem={changeItem} tabs={SidebarTabs} />
          <DiscoverContent />
        </div>
      </div>
    </main>
  )
}

export default DiscoverPage
