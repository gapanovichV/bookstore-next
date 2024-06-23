import React from "react"
import clsx from "clsx"

import styles from "./Tab.module.scss"

type TabPosition = "horizontal" | "vertical"

interface TabText {
  id: string | number
  label?: string
}
interface TabProps {
  className?: string
  position: TabPosition
  tabs: TabText[]
  onClick: (e: React.MouseEvent, id: string | number) => void
  selectedTabId: string | number

}
export const Tab = ({ position, className, tabs, selectedTabId, onClick }: TabProps) => {
  return (
    <div
      className={clsx(styles.tab, styles[position], className)}
    >
      {
        tabs && tabs.map((elem: TabText) => (
          <div key={elem.id} onClick={(e) => onClick(e, elem.id)}>
            <div>{elem.label}</div>
          </div>
        ))
      }
    </div>
  )
}
