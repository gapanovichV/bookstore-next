import React from "react"

import { Notification } from "@/components/elements"

interface ContentProps {
  className?: string
}

export const NotificationContent = ({ className }: ContentProps) => {
  return <Notification className={className} />
}
