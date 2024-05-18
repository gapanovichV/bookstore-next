import React from "react"

import AuthHeader from "@/components/modules/AuthHeader/AuthHeader"

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <AuthHeader />
      {children}
    </div>
  )
}
