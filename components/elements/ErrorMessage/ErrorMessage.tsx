import React from "react"
import clsx from "clsx"

import styles from "./ErrorMessage.module.scss"

interface Props {
  error?: string
}

export const ErrorMessage = ({ error }: Props) => {
  return <>{error && <div className={clsx(styles.error__text)}>{error}</div>}</>
}
