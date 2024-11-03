import React from "react"
import { MoonLoader } from "react-spinners"
import type { ProductItem } from "@prisma/client"
import clsx from "clsx"
import Link from "next/link"

import { Card, Dropdown, InfoIllustration } from "@/shared/components/elements"
import { findBooksByCategory, getAllBook } from "@/shared/lib/utils/book"
import type { allGetBooksParams } from "@/types/books.type"

import styles from "./DiscoverContent.module.scss"

interface ContentProps {
  className?: string
  searchParams: { category?: string | string[] }
}

const fetchBooks = async (category: string | string[] | undefined) => {
  try {
    const books =
      category && Object.keys(category).length > 0
        ? await findBooksByCategory(category)
        : await getAllBook()

    return { loading: false, books }
  } catch (error) {
    console.error(`[Discover Content] Error:`, error)
    return { loading: false, books: [] }
  }
}

export const DiscoverContent = async ({ className, searchParams }: ContentProps) => {
  const data: allGetBooksParams = await fetchBooks(searchParams.category)

  data.books
  const renderBooks = () => {
    if (data.books.length > 0) {
      return (
        <div className={clsx(styles.book__list)}>
          {data.books.map((book: ProductItem) => (
            <Link href={`/catalog/book/${book.id}`} key={book.id}>
              <Card size="large" book={book} />
            </Link>
          ))}
        </div>
      )
    }

    return (
      <div className={clsx(styles.book__info)}>
        <InfoIllustration
          nameImage="empty"
          btnText="Start Shopping"
          title="Oops... empty stock!"
          description="The book you are looking for is currently not in stock!"
        />
      </div>
    )
  }

  return (
    <div className={clsx(styles.content, className)}>
      <div className={clsx(styles.header)}>
        Showing 1 - 10 items out of a total of ? million books
        <Dropdown text="Sort By" />
      </div>

      {data.loading ? (
        <div className={clsx(styles.book__info)}>
          <MoonLoader />
        </div>
      ) : (
        renderBooks()
      )}
    </div>
  )
}
