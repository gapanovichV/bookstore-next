import React, { type Dispatch, type SetStateAction } from "react"
import clsx from "clsx"

import styles from "./Tab.module.scss"

type TabPosition = "horizontal" | "vertical"

interface TabProps {
  className?: string
  position: TabPosition
  tabs: { label: string }[]
  currentItem: { label: string }
  changeItem: Dispatch<SetStateAction<number>>
}
export const Tab = ({ position, className, tabs, currentItem, changeItem }: TabProps) => {
  return (
    <div className={clsx(styles.tab, styles[position], className)}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={clsx(styles.tab__label, { [styles.active]: currentItem.label === tab.label })}
          onClick={() => changeItem(index)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  )
}
