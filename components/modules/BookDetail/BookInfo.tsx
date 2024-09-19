"use client"

import { useState } from "react"
import type { Book } from "@prisma/client"
import clsx from "clsx"
import dateFormat from "dateformat"

import { Button } from "@/components/elements"
import { InfoProduct } from "@/components/elements/InfoProduct/InfoProduct"
import { BookStockCount } from "@/components/modules/BookDetail/BookStockCount"
import { countries } from "@/lib/utils/countries"

import styles from "./BookDetailComponents.module.scss"

interface BookInfoProps {
  book: Book | Record<string, never>
}
export const BookInfo = ({ book }: BookInfoProps) => {
  const [countProduct, setCountProduct] = useState<number>(1)

  return (
    <div className={clsx(styles.info)}>
      <div className={clsx(styles.info__authors)}>{book.authors[0]}</div>
      <h2 className={clsx(styles.info__title)}>{book.title}</h2>
      <div className={clsx(styles.info__price)}>
        {book.oldPrice && <span>${book.oldPrice}</span>}${book.price}
      </div>
      <div className={clsx(styles.info__line)}></div>
      <div className={clsx(styles.info__info_product)}>
        <InfoProduct label={"Originally published"}>
          {dateFormat(book.publishedDate, "yyyy, d mmmm")}
        </InfoProduct>
        <InfoProduct label={"Publisher"}>{book.publisher}</InfoProduct>
        <InfoProduct label={"Language"}>
          {countries[book.language && book.language.toUpperCase()] ?? ""}
        </InfoProduct>
        <InfoProduct label={"ISBN"}>{book.isbn}</InfoProduct>
        <InfoProduct label={"Number of pages"}>{book.pageCount} </InfoProduct>
      </div>
      <InfoProduct className={clsx(styles.info__catagories)} label={"Categories"}>
        {(book.categories && book.categories.join(", ")) ?? ""}
      </InfoProduct>
      <div className={clsx(styles.info__quantity)}>
        <InfoProduct label="Stock">
          <p className={clsx(styles.info__quantity__label)}>{book.stock}</p>
        </InfoProduct>
        <InfoProduct className={clsx(styles.info__quantity__count)} label="Add Product">
          <BookStockCount
            countProduct={countProduct}
            setCountProduct={setCountProduct}
            stockCount={book.stock}
          />
        </InfoProduct>
        <InfoProduct label="Total Price">
          <p className={clsx(styles.info__quantity__label)}>
            ${countProduct === 0 ? book.price : countProduct * book.price}
          </p>
        </InfoProduct>
      </div>
      <div className={clsx(styles.info__button_set)}>
        <Button size="medium" variant="fill">
          Get Book
        </Button>
        <Button size="medium" variant="line">
          Buy Now
        </Button>
      </div>
    </div>
  )
}
