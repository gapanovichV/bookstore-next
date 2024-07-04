import clsx from "clsx"

import styles from "./Notification.module.scss"

interface NotificationProps {
  className?: string
}
export const Notification = ({ className }: NotificationProps) => {
  return (
    <div className={clsx(styles.notification, className)}>
      <img src="/img/Notification.svg" alt="Notification icon" />
    </div>
  )
}
