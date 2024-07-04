import { Simulate } from "react-dom/test-utils"
import clsx from "clsx"

import { Dropdown } from "@/components/elements/Dropdown/Dropdown"

import styles from "./Content.module.scss"
import error = Simulate.error
import React from "react"

import { Card } from "@/components/elements/Card/Card"

interface ContentProps {
  className?: string
}

export const Content = ({ className }: ContentProps) => {
  const status = "error"

  return (
    <div className={clsx(styles.content, className)}>
      <div className={clsx(styles.header)}>
        Showing 1 - 9 items out of a total of ? million books
        <Dropdown />
      </div>
      <div className={clsx(styles.book_list)}>
        <Card size="medium" />
        <Card size="medium" />
        <Card size="medium" />
        <Card size="medium" />
        <Card size="medium" />
      </div>
    </div>
  )
}
