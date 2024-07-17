"use client"

import { useEffect, useState } from "react"
import clsx from "clsx"

import api from "@/api/apiInstance"
import { ReviewCard } from "@/components/elements/ReviewCard/ReviewCard"
import { BookCover } from "@/components/modules/BookDetail/BookCover"
import { BookInfo } from "@/components/modules/BookDetail/BookInfo"
import { Summary } from "@/components/modules/BookDetail/Summary"
import { handleError } from "@/lib/utils/error"
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
        const { data } = await api.post("/api/books/oneBook", { bookId })
        if (data.status === Status.Success) {
          setData(data)
        }
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
                <ReviewCard /> {/* TODO: тест ревью карточки нужно сделать другую */}
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
