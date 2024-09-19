import React from "react"
import clsx from "clsx"

import { CartCard } from "@/shared/components/elements"

import styles from "./CartPage.module.scss"

const CartPage = () => {
  return (
    <main className={clsx(styles.content)}>
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
    </main>
  )
}

export default CartPage
