import React from "react"
import clsx from "clsx"

import AuthHeader from "@/components/modules/AuthHeader/AuthHeader"

import styles from "./AuthPage.module.scss"

interface AuthPageProps {
  className?: string
  children: React.ReactNode
  pageName: string
  pageNameDescription: string
}

const AuthPage = ({ pageName, pageNameDescription, className, children }: AuthPageProps) => {
  return (
    <div className={clsx(styles[className!])}>
      <AuthHeader />
      <div className={clsx(styles.auth)}>
        <div className={clsx(styles.auth__left)}>
          <div className={clsx(styles.auth__text)}>
            <h1 className={clsx(styles.auth__text__main)}>{pageName}</h1>
            <div className={clsx(styles.auth__text__descr)}>{pageNameDescription}</div>
          </div>
        </div>
        <div className={clsx(styles.auth__right)}>
          <div className={clsx(styles.auth__form)}>{children}</div>
        </div>
      </div>
    </div>
  )
}
export default AuthPage
