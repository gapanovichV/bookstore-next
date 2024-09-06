"use client"

import clsx from "clsx"
import { useRouter } from "next/navigation"

import { RouteEnum } from "@/types/route.type"

import styles from "./Notification.module.scss"

interface NotificationProps {
  className?: string
}
export const Notification = ({ className }: NotificationProps) => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push(RouteEnum.NOTIFICATION)}
      className={clsx(styles.notification, className)}
    >
      <img src="/img/Notification.svg" alt="Notification icon" />
    </div>
  )
}
