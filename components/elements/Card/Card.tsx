import clsx from "clsx"
import Link from "next/link"

import type { BookParams } from "@/lib/database/models/book.model"

import styles from "./Card.module.scss"

type CardSize = "small" | "medium" | "large" | "mobile"

interface CardProps {
  className?: string
  size: CardSize
  book: BookParams
  id: string
}

export const Card = ({ className, size, book, id }: CardProps) => {
  return (
    <Link href={`/catalog/book/${id}`} key={id}>
      <div className={clsx(styles.card, styles[size], className)}>
        <div className={clsx(styles.card__img)}>
          <img src={book.imageUrl} alt="Picture Card" />
        </div>
        <div className={clsx(styles.card__info)}>
          <p className={clsx(styles.card__info__title)}>{book.title}</p>
          <div className={clsx(styles.card__info__line)}></div>
          <div className={clsx(styles.card__info__book)}>
            <div className={clsx(styles.card__info__book_top)}>
              <p>Writer</p>
              <p>Buy now</p>
            </div>
            <div className={clsx(styles.card__info__book_down)}>
              <p className={clsx(styles.card__info__book_author)}>{book.authors[0]}</p>
              <div className={clsx(styles.card__info__book_price)}>
                {book.oldPrice && (
                  <span className={clsx(styles.card__info__book_price_discont)}>
                    ${book.oldPrice}
                  </span>
                )}
                ${book.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
