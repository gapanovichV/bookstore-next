"use client"

import { useEffect, useState } from "react"
import clsx from "clsx"

import { Button, ReviewBookDetail } from "@/shared/components/elements"
import { BookCover, BookInfo, Summary } from "@/shared/components/modules"
import { handleError } from "@/shared/lib/utils/error"
import { Api } from "@/shared/services/api-client"
import type { oneGetBookParams } from "@/types/books.type"
import { Status } from "@/types/response.type"

import styles from "./BookDetail.module.scss"

interface BookDetailProps {
  className?: string
  bookId: string
}

export const BookDetail = ({ className, bookId }: BookDetailProps) => {
  const [data, setData] = useState<oneGetBookParams>({
    status: Status.Loading,
    book: {}
  })

  useEffect(() => {
    const fetchBook = async (bookId: string) => {
      try {
        const data = await Api.products.takeOneBook(Number(bookId))
        console.log(data)
      } catch (error) {
        handleError(error)
      }
    }
    fetchBook(bookId).catch(console.error)
  }, [bookId])

  return (
    <div className={clsx(styles.book, className)}>
      <div className={clsx("container", styles.book__container)}>
        {data.status === Status.Success && (
          <>
            <div className={clsx(styles.book__left)}>
              <BookCover imageUrl={data.book.imageUrl} />
              <Summary description={data.book.description} />
              <div className={clsx(styles.book__review_book)}>
                <div className={clsx(styles.book__review_book__header)}>
                  <h3>Review</h3>
                  <Button variant="ghost" size="small">
                    See all
                  </Button>
                </div>
                <div className={clsx(styles.book__review_book__card)}>
                  <ReviewBookDetail />
                  <ReviewBookDetail />
                </div>
              </div>
            </div>
            <div className={clsx(styles.line)}></div>
            <BookInfo book={data.book} />
          </>
        )}
      </div>
    </div>
  )
}
