"use client"

import React, { useEffect, useState } from "react"
import { MoonLoader } from "react-spinners"
import type { ProductItem } from "@prisma/client"
import clsx from "clsx"
import Link from "next/link"

import { Card, Dropdown, InfoIllustration } from "@/shared/components/elements"
import { Api } from "@/shared/services/api-client"
import type { allGetBooksParams } from "@/types/books.type"

import styles from "./DiscoverContent.module.scss"

interface ContentProps {
  className?: string
  searchParams: { category: string | string[] | undefined }
}

export const DiscoverContent = ({ className, searchParams }: ContentProps) => {
  const [data, setData] = useState<allGetBooksParams>({
    loading: true,
    books: []
  })

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await Api.products.getBooks(searchParams.category)
        if (!data.loading) {
          setData(data)
        }
      } catch (error) {
        console.error(`[Discover Content] Error:`, error)
        setData({ books: [], loading: true })
      }
    }
    fetchBooks().catch(console.error)
  }, [searchParams.category])

  const books = data.books.map((book: ProductItem) => (
    <Link href={`/catalog/book/${book.id}`} key={book.id}>
      <Card key={book.id} size="large" book={book} />
    </Link>
  ))

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
        <>
          {data.books.length > 0 ? (
            <div className={clsx(styles.book__list)}>{books}</div>
          ) : (
            <div className={clsx(styles.book__info)}>
              <InfoIllustration
                nameImage="empty"
                btnText="Start Shopping"
                title="Ups... empty stock!"
                description="The book you are looking for is still not ready stock!"
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}
