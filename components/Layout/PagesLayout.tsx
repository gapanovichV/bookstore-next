import React from "react"
import { Toaster } from "react-hot-toast"

import { AuthProvider } from "@/context/AuthProvider"

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </AuthProvider>
      </body>
    </html>
  )
}

export default PagesLayout
