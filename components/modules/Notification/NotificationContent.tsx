import React from "react"

import { Notif } from "@/components/elements"

interface ContentProps {
  className?: string
}

export const NotificationContent = ({ className }: ContentProps) => {
  return <Notif className={className} />
}
