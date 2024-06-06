"use client"

import { useState } from "react"
import clsx from "clsx"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/elements/Button/Button"
import { SearchResults } from "@/components/elements/SearchResults/SearchResults"
import { RouteEnum } from "@/types/route.type"

import styles from "./Header.module.scss"

const Header = () => {
  const router = useRouter()
  const pathName = usePathname()
  const [isLogin, setIsLogin] = useState(false)

  return (
    <header className={clsx(styles.header)}>
      <div className={clsx("container", styles.header__container)}>
        <Link href={RouteEnum.MAIN}>
          <img src="/img/Logo.svg" alt="Logo" />
        </Link>
        <SearchResults />
        {pathName === RouteEnum.CATALOG || (
          <Button size="small" variant="ghost" onClick={() => router.push(RouteEnum.CATALOG)}>
            Discover
          </Button>
        )}
        {!isLogin ? (
          <>
            <Button size="medium" variant="fill" onClick={() => router.push(RouteEnum.SIGN_IN)}>
              Login
            </Button>
          </>
        ) : (
          <div className={clsx(styles.header__logined)}>
            <img src="/img/Notification.svg" alt="Notification icon" />
            <Link href={RouteEnum.CART}>
              <img src="/img/Cart.svg" alt="Cart Icon" />
            </Link>
            <Link href={RouteEnum.PROFILE}>
              <img src="/img/ProfileTEST.png" alt="Profile picture" />
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
