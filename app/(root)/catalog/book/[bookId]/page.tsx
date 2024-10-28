"use client"

import { useEffect, useState } from "react"
import clsx from "clsx"

import { ReviewBookDetail } from "@/shared/components/elements"
import { BookCover, BookInfo, Summary } from "@/shared/components/modules"
import { Api } from "@/shared/services/api-client"
import type { oneGetBookParams } from "@/types/books.type"

import styles from "./BookDetail.module.scss"

interface BookDetailPageProps {
  params: { bookId: string }
}
const BookDetailPage = ({ params: { bookId } }: BookDetailPageProps) => {
  const [data, setData] = useState<oneGetBookParams>({
    loading: true,
    book: {}
  })

  useEffect(() => {
    const fetchBook = async (bookId: string) => {
      try {
        const data = await Api.products.takeOneBook(Number(bookId))
        if (!data.loading) {
          setData(data)
        }
      } catch (error) {
        console.error(`[Book Detail] Error:`, error)
      }
    }
    fetchBook(bookId).catch(console.error)
  }, [bookId])

  const bookReviews = data.book.comments
    ?.slice(-3)
    .reverse()
    .map((value) => <ReviewBookDetail key={value.id} data={value} />)

  return (
    <div className={clsx(styles.book)}>
      <div className={clsx("container", styles.book__container)}>
        {!data.loading && (
          <>
            <div className={clsx(styles.book__left)}>
              <BookCover imageUrl={data.book.imageUrl} />
              <Summary description={data.book.description} />
              {data.loading || !data.book.comments?.length || (
                <div className={clsx(styles.book__review_book)}>
                  <div className={clsx(styles.book__review_book__header)}>
                    <h3>Review</h3>
                    {/* <Button variant="ghost" size="small"> */}
                    {/*  See all */}
                    {/* </Button> */}
                    {/* TODO: page see all is not in the layout  */}
                  </div>
                  <div className={clsx(styles.book__review_book__card)}>{bookReviews}</div>
                </div>
              )}
            </div>
            <div className={clsx(styles.line)}></div>
            <BookInfo book={data.book} />
          </>
        )}
      </div>
    </div>
  )
}

export default BookDetailPage
