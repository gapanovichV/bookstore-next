import React from "react"

import { Header } from "@/shared/components/modules"

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
