"use client"

import clsx from "clsx"
import { useRouter } from "next/navigation"

import Logo from "@/components/elements/Logo/Logo"

import styles from "./AuthHeader.module.scss"

const AuthHeader = () => {
  const router = useRouter()
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx("container", styles.header__container)}>
        <Logo logoIsIcon={false} />
        <button className={clsx("btn-reset")} onClick={() => router.back()}>
          <img src="/img/closeCircle.svg" alt="Cloce circle" />
        </button>
      </div>
    </header>
  )
}

export default AuthHeader
