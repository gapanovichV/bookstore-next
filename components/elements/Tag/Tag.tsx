import React from "react"
import clsx from "clsx"

import styles from "./Tag.module.scss"

type TagColor = "red" | "green" | "yellow" | "default"

interface TagProps {
  className?: string
  children: string
  status?: boolean
  color?: TagColor
}

export const Tag = ({ children, status, color = "default", className }: TagProps) => {
  return (
    <div className={clsx(styles.tag, styles[color], { [styles.status]: !status }, className)}>
      {children.toUpperCase()}
    </div>
  )
}
