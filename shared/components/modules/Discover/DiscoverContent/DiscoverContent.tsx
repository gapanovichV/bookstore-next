"use client"

import React, { useEffect, useState } from "react"
import { MoonLoader } from "react-spinners"
import type { ProductItem } from "@prisma/client"
import clsx from "clsx"

import { Card, Dropdown, InfoIllustration } from "@/shared/components/elements"
import { handleError } from "@/shared/lib/utils/error"
import { Api } from "@/shared/services/api-client"
import type { allGetBooksParams } from "@/types/books.type"
import { Status } from "@/types/response.type"

import styles from "./DiscoverContent.module.scss"
import axiosInstance from "@/shared/services/instance"

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
        const response = await Api.products.getAllBooks()
        console.log(response)
      } catch (error) {
        handleError(error)
      }
    }
    fetchBooks().catch(console.error)
  }, [])


  const books = data.books.map((book: ProductItem) => (
    <Card key={book.id} size="large" book={book} id={book.id} />
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
