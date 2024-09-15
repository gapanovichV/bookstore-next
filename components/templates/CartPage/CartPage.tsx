import React from "react"
import clsx from "clsx"

import { CartCard } from "@/components/elements"

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
