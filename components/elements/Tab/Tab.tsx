import React, { type Dispatch, type SetStateAction } from "react"
import clsx from "clsx"

import { Tag } from "../Tag/Tag"

import styles from "./Tab.module.scss"

type TabPosition = "horizontal" | "vertical"

export interface ITab {
  id: number
  label: string
  tag?: boolean
  tagValue?: string
}

interface TabProps {
  className?: string
  position: TabPosition
  visibleLine?: boolean
  tabs: ITab[]
  currentItem: ITab
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
        <div key={index} className={clsx(styles.tab__text)}>
          <div
            className={clsx(
              styles.tab__label,
              { [styles.active]: currentItem.label === tab.label },
              { [styles.tag]: tab.tag },
              { [styles.line]: !visibleLine }
            )}
            onClick={() => changeItem(index)}
          >
            {tab.label}
          </div>
          {tab.tag && tab.tagValue ? (
            <Tag status={true} className={clsx(styles.tag)}>
              {tab.tagValue}
            </Tag>
          ) : null}
        </div>
      ))}
    </div>
  )
}
