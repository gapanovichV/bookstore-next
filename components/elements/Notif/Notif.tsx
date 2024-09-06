import clsx from "clsx"

import styles from "./Notif.module.scss"

interface NotifProps {
  className?: string
}

export const Notif = ({ className }: NotifProps) => {
  return (
    <div className={clsx(styles.notif)}>
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
