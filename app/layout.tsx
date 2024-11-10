import React, { Suspense } from "react"
import { Toaster } from "react-hot-toast"
import type { Metadata } from "next"

import { AuthProvider } from "@/context/AuthProvider"

import "./globalStyles/index.scss"

export const metadata: Metadata = {
  title: "BookStore",
  description: "Generated by create next app"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Suspense>
          <AuthProvider>
            {children}
            <Toaster position="top-center" reverseOrder={false} />
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  )
}
