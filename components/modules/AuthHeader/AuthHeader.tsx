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
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5094 29.334C23.8725 29.334 29.8431 23.3648 29.8431 16.0003C29.8431 8.63726 23.8725 2.66667 16.5094 2.66667C9.14638 2.66667 3.17578 8.63726 3.17578 16.0003C3.17578 23.3648 9.14638 29.334 16.5094 29.334Z"
              stroke="#1A1A1A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.8424 10.668L11.1758 21.3346"
              stroke="#1A1A1A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.1758 10.668L21.8424 21.3346"
              stroke="#1A1A1A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default AuthHeader
