import { Toaster } from "react-hot-toast"

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  )
}

export default PagesLayout
