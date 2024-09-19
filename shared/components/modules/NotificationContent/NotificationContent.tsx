import React from "react"

import { Notification } from "@/shared/components/elements"

interface ContentProps {
  className?: string
}

export const NotificationContent = ({ className }: ContentProps) => {
  return <Notification className={className} />
}
