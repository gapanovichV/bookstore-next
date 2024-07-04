"use client"

import React from "react"
import clsx from "clsx"

import { Content } from "@/components/modules/Discover/Content/Content"
import { Sidebar } from "@/components/modules/Discover/Sidebar/Sidebar"
import { Topbar } from "@/components/modules/Discover/Topbar/Topbar"

import styles from "./DiscoverPage.module.scss"

const DiscoverPage = () => {
  return (
    <main>
      <div className={clsx(styles.tab)}>
        <div className={clsx("container")}>
          <Topbar />
        </div>
      </div>
      <div className={clsx("container")}>
        <div className={clsx(styles.content)}>
          <Sidebar />
          <Content />
        </div>
      </div>
    </main>
  )
}

export default DiscoverPage
