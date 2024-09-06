import React from "react"
import clsx from "clsx"

import styles from "./InfoProduct.module.scss"

interface InfoProductProps {
  className?: string
  children?: React.ReactNode
  label: string
}

export const InfoProduct = ({ label, className, children }: InfoProductProps) => {
  return (
    <div className={clsx(styles.info, className)}>
      <div className={clsx(styles.info__label)}>{label}</div>
      <div className={clsx(styles.info__value)}>{children}</div>
    </div>
  )
}
