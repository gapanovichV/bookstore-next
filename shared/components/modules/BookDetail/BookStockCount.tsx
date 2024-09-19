import type { ChangeEvent } from "react"
import clsx from "clsx"

import styles from "./BookDetailComponents.module.scss"

interface BookStockCountParams {
  className?: string
  stockCount: number
  countProduct: number
  setCountProduct: (count: number) => void
}

export const BookStockCount = ({
  className,
  stockCount,
  countProduct,
  setCountProduct
}: BookStockCountParams) => {
  const handleClickMinus = () => {
    if (countProduct === 1) return
    setCountProduct(countProduct - 1)
  }

  const handleClickPus = () => {
    if (countProduct >= stockCount) return
    setCountProduct(countProduct + 1)
  }

  const handleChangeCount = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (+value >= stockCount + 1) return
    setCountProduct(+value)
  }

  return (
    <div className={clsx(styles.count__wrapper, className)}>
      <button onClick={handleClickMinus} className={clsx("btn-reset", styles.count__btn)}>
        <img src="/img/minus.svg" alt="minus" />
      </button>
      <input
        type="number"
        onChange={(event) => handleChangeCount(event)}
        value={countProduct}
        className={clsx("input-reset", styles.count)}
      />
      <button onClick={handleClickPus} className={clsx("btn-reset", styles.count__btn)}>
        <img src="/img/plus.svg" alt="plus" />
      </button>
    </div>
  )
}
