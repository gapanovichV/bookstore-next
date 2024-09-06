import React, { type Dispatch, type SetStateAction } from "react"
import clsx from "clsx"

import type { ITab } from "@/components/elements/Tab/Tab"
import { Tab } from "@/components/elements/Tab/Tab"

import styles from "./Sidebar.module.scss"

interface SidebarProps {
  className?: string
  tabs: ITab[]
  currentItem: ITab
  changeItem: Dispatch<SetStateAction<number>>
}

export const Sidebar = ({ className, tabs, currentItem, changeItem }: SidebarProps) => {
  return (
    <>
      <div className={clsx(styles.sidebar, className)}>
        <Tab
          tabs={tabs}
          currentItem={currentItem}
          changeItem={changeItem}
          position={"vertical"}
          visibleLine={false}
        />
      </div>
    </>
  )
}
