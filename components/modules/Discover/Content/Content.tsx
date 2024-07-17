import React, { useEffect, useState } from "react"
import { MoonLoader } from "react-spinners"
import clsx from "clsx"
import Link from "next/link"

import api from "@/api/apiInstance"
import { Card } from "@/components/elements/Card/Card"
import { Dropdown } from "@/components/elements/Dropdown/Dropdown"
import { InfoIllustration } from "@/components/elements/InfoCard/InfoIllustration"
import type { BookParams } from "@/lib/database/models/book.model"
import { handleError } from "@/lib/utils/error"
import type { allGetBooksParams } from "@/types/books.type"
import { Status } from "@/types/response.type"

import styles from "./Content.module.scss"

interface ContentProps {
  className?: string
}

export const Content = ({ className }: ContentProps) => {
  const [data, setData] = useState<allGetBooksParams>({
    status: Status.Loading,
    books: []
  })

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await api.get("/api/books/allBooks")
        if (data.status === Status.Success) {
          setData(data)
        }
      } catch (error) {
        handleError(error)
      }
    }
    fetchBooks().catch(console.error)
  }, [])

  const books = data.books.map((book: BookParams) => (
    <Link href={`/catalog/book/${book._id}`} key={book._id}>
      <Card key={book._id} size="large" book={book} />
    </Link>
  ))

  return (
    <div className={clsx(styles.content, className)}>
      <div className={clsx(styles.header)}>
        Showing 1 - 10 items out of a total of ? million books
        <Dropdown text="Sort By" />
      </div>
      {data.status === Status.Success ? (
        books
      ) : (
        <div className={clsx(styles.book__info)}>
          {data.status === Status.Loading ? (
            <MoonLoader />
          ) : (
            <InfoIllustration
              className={clsx(styles.book__info)}
              nameImage="empty"
              btnText="Start Shopping"
              title="Ups... empty stock!"
              description="The book you are looking for is still not ready stock!"
            />
          )}
        </div>
      )}
    </div>
  )
}
