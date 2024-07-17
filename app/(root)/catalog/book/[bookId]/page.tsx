import { BookDetail } from "@/components/templates/BookDetail/BookDetail"

const BookDetailPage = ({ params }: { params: { bookId: string } }) => {
  return <BookDetail bookId={params.bookId} />
}

export default BookDetailPage
