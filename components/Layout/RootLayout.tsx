import React from "react"

import { Footer, Header } from "@/components/modules"

interface LayoutProps {
  children?: React.ReactNode
}
const RootLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default RootLayout
