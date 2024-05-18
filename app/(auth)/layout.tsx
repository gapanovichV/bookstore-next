import React from "react"
import clsx from "clsx"

import styles from "./AuthLayout.module.scss"

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className={clsx(styles.auth)}>{children}</div>
}
