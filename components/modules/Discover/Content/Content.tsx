import React from "react"
import clsx from "clsx"

import { Card } from "@/components/elements/Card/Card"
import { Dropdown } from "@/components/elements/Dropdown/Dropdown"

import styles from "./Content.module.scss"

interface ContentProps {
  className?: string
}

export const Content = ({ className }: ContentProps) => {
  const status = "error"

  return (
    <div className={clsx(styles.content, className)}>
      <div className={clsx(styles.header)}>
        Showing 1 - 10 items out of a total of ? million books
        <Dropdown />
      </div>
      <div className={clsx(styles.book_list)}>
        <Card size="large" />
        <Card size="large" />
        <Card size="large" />
        <Card size="large" />
        <Card size="large" />
        <Card size="large" />
        <Card size="large" />
        <Card size="large" />
        <Card size="large" />
        <Card size="large" />
      </div>
    </div>
  )
}
