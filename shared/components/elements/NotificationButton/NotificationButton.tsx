import clsx from "clsx"
import Link from "next/link"

import { RouteEnum } from "@/types/route.type"

import styles from "./NotificationButton.module.scss"

interface NotificationButtonProps {
  className?: string
}
export const NotificationButton = ({ className }: NotificationButtonProps) => {
  return (
    <Link href={RouteEnum.NOTIFICATION} className={clsx(styles.notification, className)}>
      <img src="/img/Notification.svg" alt="Notification icon" />
    </Link>
  )
}
