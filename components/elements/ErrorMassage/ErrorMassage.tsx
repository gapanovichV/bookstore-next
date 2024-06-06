import React from "react"
import clsx from "clsx"

import styles from "./ErrorMassage.module.scss"

interface ErrorMassageProps {
  error?: string
}

export const ErrorMassage = ({ error }: ErrorMassageProps) => {
  return <>{error && <div className={clsx(styles.error__text)}>{error}</div>}</>
}
