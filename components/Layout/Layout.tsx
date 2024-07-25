import React, { Suspense } from "react"

import { Footer, Header } from "@/components/modules"

interface LayoutProps {
  children?: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
