import clsx from "clsx"

import Logo from "@/components/elements/Logo/Logo"

import styles from "./AuthHeader.module.scss"
import Link from "next/link"
import { RouteEnum } from "@/types/route.type"

const AuthHeader = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx("container", styles.header__container)}>
        <Logo />
        <Link href={RouteEnum.MAIN}>
          <img src="/img/closeCircle.svg" alt="Cloce circle" />
        </Link>
      </div>
    </header>
  )
}

export default AuthHeader
