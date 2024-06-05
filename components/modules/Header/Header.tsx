"use client"

import clsx from "clsx"
import Link from "next/link"
import {useRouter } from "next/navigation"

import { Button } from "@/components/elements/Button/Button"
import { SearchResults } from "@/components/elements/SearchResults/SearchResults"
import { RouteEnum } from "@/types/route.type"

import styles from "./Header.module.scss"

const Header = () => {
  const router = useRouter()
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx("container", styles.header__container)}>
        <Link href={RouteEnum.MAIN}>
          <img src="/img/Logo.svg" alt="Logo" />
        </Link>
        <SearchResults />
        <Button size="small" variant="ghost" onClick={() => router.push(RouteEnum.CATALOG)}>Discover</Button>
        <Button size="medium" variant="fill" onClick={() => router.push(RouteEnum.SIGN_IN)}>Login</Button>
      </div>
    </header>
  )
}

export default Header
