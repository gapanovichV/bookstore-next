import clsx from "clsx"

import { Button } from "@/shared/components/elements"

import styles from "./CartCard.module.scss"

interface CartCardProps {
  className?: string
}

export const CartCard = ({ className }: CartCardProps) => {
  return (
    <div className={clsx(styles.cart, className)}>
      <div className={clsx(styles.cart__info)}>
        <div className={clsx(styles.cart__info__stock)}>
          // Checkbox
          <div className={clsx(styles.cart__info__stock__quantity)}>Stock 14</div>
        </div>
        <h4 className={clsx(styles.cart__info__title)}>Jika Kucing Lenyap Dari Dunia</h4>
        <div className={clsx(styles.cart__info__price)}>
          1 book x <span>$19.0</span>
        </div>
        <div className={clsx(styles.cart__info__btn)}>
          <Button size="small" variant="ghost">
            Add item
          </Button>
          <button className={clsx("btn-reset")}>DEL</button>
        </div>
      </div>
      <img className={clsx(styles.cart__img)} src="/img/testReview.png" alt="Book cover" />
    </div>
  )
}
