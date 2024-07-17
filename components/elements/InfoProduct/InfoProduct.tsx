import clsx from "clsx"

import styles from "./InfoProduct.module.scss"

interface InfoProductProps {
  className?: string
  label: string
  value: string | number | string[]
}

export const InfoProduct = ({ label, value, className }: InfoProductProps) => {
  return (
    <div className={clsx(styles.info, className)}>
      <div className={clsx(styles.info__label, styles.label)}>{label}</div>
      <div className={clsx(styles.info__value, styles.value)}>{value}</div>
    </div>
  )
}
