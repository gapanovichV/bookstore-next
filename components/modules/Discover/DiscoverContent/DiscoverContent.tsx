"use client"

import React, { useEffect, useState } from "react"
import { MoonLoader } from "react-spinners"
import clsx from "clsx"

import api from "@/api/apiInstance"
import { Card, Dropdown, InfoIllustration } from "@/components/elements"
import type { BookParams } from "@/lib/database/models/book.model"
import { handleError } from "@/lib/utils/error"
import type { allGetBooksParams } from "@/types/books.type"
import { Status } from "@/types/response.type"

import styles from "./DiscoverContent.module.scss"

interface ContentProps {
  className?: string
}

export const DiscoverContent = ({ className }: ContentProps) => {
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
    <Card key={book._id} size="large" book={book} id={book._id} />
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
