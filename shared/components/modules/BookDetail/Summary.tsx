import clsx from "clsx"

import styles from "./BookDetailComponents.module.scss"

interface SummaryProps {
  description: string
}
export const Summary = ({ description }: SummaryProps) => {
  return (
    <div className={clsx(styles.summary)}>
      <h3 className={clsx(styles.summary__title)}>Summary</h3>
      <p className={clsx(styles.summary__descr)}>{description}</p>
    </div>
  )
}
