import React from "react"

import { Header } from "@/components/modules"

interface LayoutProps {
  children?: React.ReactNode
}
const HeadLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default HeadLayout
