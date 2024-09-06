import React from "react"

import RootLayout from "@/components/Layout/RootLayout"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootLayout>{children}</RootLayout>
}
