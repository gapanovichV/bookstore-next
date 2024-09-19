import React from "react"

import { PurchaseCard } from "@/shared/components/elements"

interface ContentProps {
  className?: string
}

export const PurchaseContent = ({ className }: ContentProps) => {
  return <PurchaseCard className={className} />
}
