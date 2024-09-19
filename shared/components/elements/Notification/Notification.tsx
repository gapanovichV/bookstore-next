import clsx from "clsx"

import styles from "./Notification.module.scss"

interface NotificationProps {
  className?: string
}

export const Notification = ({ className }: NotificationProps) => {
  return (
    <div className={clsx(styles.notif, className)}>
      <div className={clsx(styles.notif__text)}>
        <div className={clsx(styles.notif__text__upper)}>
          <img
            className={clsx(styles.notif__text__upper__img)}
            src="/img/discount.svg"
            alt="discount"
          />
          <p className={clsx(styles.notif__text__upper__title)}>Promo</p>
        </div>
        <p className={clsx(styles.notif__text__descr)}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        </p>
      </div>
    </div>
  )
}
