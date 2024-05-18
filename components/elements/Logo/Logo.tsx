import clsx from "clsx"
import Link from "next/link"

import { RouteEnum } from "@/types/route.type"

import styles from "./Logo.module.scss"

const Logo = () => (
  <Link className={clsx(styles.logo)} href={RouteEnum.MAIN}>
    <img className={clsx(styles.logo__img)} src="/img/Logo.svg" alt="BookStore Logo" />
  </Link>
)

export default Logo
