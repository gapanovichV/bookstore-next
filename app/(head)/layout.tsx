import React from "react"

import HeadLayout from "@/shared/components/Layout/HeadLayout"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <HeadLayout>{children}</HeadLayout>
}
