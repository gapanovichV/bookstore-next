import clsx from "clsx"

import { ReviewBookDetail } from "@/shared/components/elements"
import { BookCover, BookInfo, Summary } from "@/shared/components/modules"
import { findBookById } from "@/shared/lib/utils/book"
import type { oneGetBookParams } from "@/types/books.type"

import styles from "./BookDetail.module.scss"

interface BookDetailPageProps {
  params: { bookId: string }
}

const fetchBook = async (bookId: string): Promise<oneGetBookParams> => {
  try {
    const book = await findBookById(Number(bookId))
    return { loading: false, book: book || null, }
  } catch (error) {
    console.error(`[Book Detail] Error:`, error)
    return { loading: false, book: null }
  }
}

const BookDetailPage = async ({ params: { bookId } }: BookDetailPageProps) => {
  const data: oneGetBookParams = await fetchBook(bookId)

  if (data.loading) {
    return <div className={clsx(styles.loading)}>Loading...</div>;
  }

  if (!data.book) {
    return <div className={clsx(styles.error)}>Book not found.</div>;
  }

  const bookReviews = (data.book.comments || [])
    .slice(-3)
    .reverse()
    .map((value) => <ReviewBookDetail key={value.id} data={value} />);

  return (
    <div className={clsx(styles.book)}>
      <div className={clsx("container", styles.book__container)}>
        <>
          <div className={clsx(styles.book__left)}>
            <BookCover imageUrl={data.book.imageUrl} />
            <Summary description={data.book.description} />
            {bookReviews.length > 0 && (
              <div className={clsx(styles.book__review_book)}>
                <div className={clsx(styles.book__review_book__header)}>
                  <h3>Review</h3>
                  {/* <Button variant="ghost" size="small">See all</Button> */}
                </div>
                <div className={clsx(styles.book__review_book__card)}>
                  {bookReviews}
                </div>
              </div>
            )}
          </div>
          <div className={clsx(styles.line)}></div>
          <BookInfo book={data.book} />
        </>
      </div>
    </div>
  );
}

export default BookDetailPage
