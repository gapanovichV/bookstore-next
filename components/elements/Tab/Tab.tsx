import React, { type Dispatch, type SetStateAction } from "react"
import clsx from "clsx"

import styles from "./Tab.module.scss"

type TabPosition = "horizontal" | "vertical"

interface TabProps {
  className?: string
  position: TabPosition
  visibleLine?: boolean
  tabs: { label: string }[]
  currentItem: { label: string }
  changeItem: Dispatch<SetStateAction<number>>
}
export const Tab = ({
  tabs,
  position,
  visibleLine = true,
  currentItem,
  changeItem,
  className
}: TabProps) => {
  return (
    <div className={clsx(styles.tab, styles[position], className)}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={clsx(
            styles.tab__label,
            { [styles.active]: currentItem.label === tab.label },
            { [styles.line]: !visibleLine }
          )}
          onClick={() => changeItem(index)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  )
}
