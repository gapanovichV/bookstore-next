import clsx from "clsx"

import styles from "./PurchaseCard.module.scss"

interface PurchaseCardProps {
  className?: string
}
export const PurchaseCard = ({ className }: PurchaseCardProps) => {
  console.log()
  return <div className={clsx(styles.card, className)}></div>
}
