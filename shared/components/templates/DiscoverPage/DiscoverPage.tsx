"use client"

import React from "react"
import clsx from "clsx"

import { DiscoverContent, Sidebar, Topbar } from "@/shared/components/modules"

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
          <DiscoverContent />
        </div>
      </div>
    </main>
  )
}

export default DiscoverPage
