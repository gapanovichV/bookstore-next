import React from "react"
import clsx from "clsx"

import { Card } from "@/components/elements/Card/Card"
import { Dropdown } from "@/components/elements/Dropdown/Dropdown"
import { InfoIllustration } from "@/components/elements/InfoCard/InfoIllustration"

import styles from "./Content.module.scss"

interface ContentProps {
  className?: string
}

export const Content = ({ className }: ContentProps) => {
  const status = "ok"

  return (
    <div className={clsx(styles.content, className)}>
      <div className={clsx(styles.header)}>
        Showing 1 - 10 items out of a total of ? million books
        <Dropdown />
      </div>
      {status !== "ok" ? (
        <InfoIllustration
          className={clsx(styles.book__info)}
          nameImage="empty"
          btnText="Start Shopping"
          title="Ups... empty stock!"
          description="The book you are looking for is still not ready stock!"
        />
      ) : (
        <div className={clsx(styles.book__list)}>
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
      )}
    </div>
  )
}
