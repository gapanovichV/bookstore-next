"use client"

import { useState } from "react"
import clsx from "clsx"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/elements/Button/Button"
import { Notification } from "@/components/elements/Notification/Notification"
import { ProfilePicture } from "@/components/elements/ProfilePicture/ProfilePicture"
import { SearchBar } from "@/components/elements/SearchBar/SearchBar"
import { RouteEnum } from "@/types/route.type"

import styles from "./Header.module.scss"

export const Header = () => {
  const router = useRouter()
  const pathName = usePathname()
  const [isLogin, setIsLogin] = useState(true)
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx("container", styles.header__container)}>
        <Link href={RouteEnum.MAIN}>
          <img className={clsx(styles.header__logo)} src="/img/Logo.svg" alt="Logo" />
          <img
            className={clsx(styles.header__logo__small)}
            src="/img/LogoIcon.svg"
            alt="Small Logo"
          />
        </Link>
        <SearchBar className={clsx(styles.header__search)} />
        {pathName === RouteEnum.CATALOG || (
          <Button
            className={clsx(styles.header__btn)}
            type="button"
            size="small"
            variant="ghost"
            onClick={() => router.push(RouteEnum.CATALOG)}
          >
            Discover
          </Button>
        )}
        {!isLogin ? (
          <>
            <Button
              type="button"
              size="medium"
              variant="fill"
              onClick={() => router.push(RouteEnum.SIGN_IN)}
            >
              Login
            </Button>
          </>
        ) : (
          <div className={clsx(styles.header__logined)}>
            <Notification />
            <Link href={RouteEnum.CART}>
              <img src="/img/Cart.svg" alt="Cart Icon" />
            </Link>
            <Link href={RouteEnum.PROFILE}>
              <ProfilePicture size="small" />
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
