import React from "react"

import BellLayout from "@/components/Layout/BellLayout"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <BellLayout>{children}</BellLayout>
}
