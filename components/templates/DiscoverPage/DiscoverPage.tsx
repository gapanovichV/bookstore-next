"use client"

import React from "react"
import clsx from "clsx"

import { Content } from "@/components/modules/Discover/Content/Content"
import { Topbar } from "@/components/modules/Discover/Topbar/Topbar"
import { Sidebar } from "@/components/modules/Sidebar/Sidebar"

import styles from "./DiscoverPage.module.scss"

const DiscoverPage = () => {
  const SidebarTabs = [
    { label: "Fiction & Literature" },
    { label: "Non Fiction" },
    { label: "Comic" },
    { label: "Children Book" }
  ]

  return (
    <main>
      <div className={clsx(styles.tab)}>
        <div className={clsx("container")}>
          <Topbar />
        </div>
      </div>
      <div className={clsx("container")}>
        <div className={clsx(styles.content)}>
          <Sidebar tabs={SidebarTabs} />
          <Content />
        </div>
      </div>
    </main>
  )
}

export default DiscoverPage
