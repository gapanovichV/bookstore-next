import clsx from "clsx"
import dateFormat from "dateformat"

import { InfoProduct } from "@/components/elements/InfoProduct/InfoProduct"
import type { BookParams } from "@/lib/database/models/book.model"
import { countries } from "@/lib/utils/countries"

import styles from "./BookDetailComponents.module.scss"

interface BookInfoProps {
  book: BookParams | Record<string, never>
}
export const BookInfo = ({ book }: BookInfoProps) => {
  return (
    <div className={clsx(styles.info)}>
      <div className={clsx(styles.info__authors)}>{book.authors}</div>
      <h2 className={clsx(styles.info__title)}>{book.title}</h2>
      <div className={clsx(styles.info__price)}>
        {book.oldPrice && <span>${book.oldPrice}</span>}${book.price}
      </div>
      <div className={clsx(styles.info__line)}></div>
      <div className={clsx(styles.info__info_product)}>
        <InfoProduct
          label={"Originally published"}
          value={dateFormat(book.publishedDate, "yyyy, d mmmm")}
        />
        <InfoProduct label={"Publisher"} value={book.publisher} />
        <InfoProduct
          label={"Language"}
          value={countries[book.language && book.language.toUpperCase()] ?? ""}
        />
        <InfoProduct label={"ISBN"} value={book.isbn} />
        <InfoProduct label={"Number of pages"} value={book.pageCount} />
      </div>
      <InfoProduct
        className={clsx(styles.info__catagories)}
        label={"Categories"}
        value={(book.categories && book.categories.join(", ")) ?? ""}
      />
    </div>
  )
}
