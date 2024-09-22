"use client"

import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"
import clsx from "clsx"
import { useRouter } from "next/navigation"

import { Button, CheckList, Dropdown, PurchaseCard, ReviewCard } from "@/shared/components/elements"
import { ReviewBookDetail } from "@/shared/components/elements/ReviewBookDetail/ReviewBookDetail"
import { useUserLogout } from "@/shared/hooks/useUserLogout"
import { Api } from "@/shared/services/api-client"
import type { oneGetBookParams } from "@/types/books.type"
import { RouteEnum } from "@/types/route.type"

import styles from "@/shared/components/templates/BookDetail/BookDetail.module.scss"

const MainPage = () => {
  const router = useRouter()
  const handleLogout = useUserLogout()
  const [data, setData] = useState<oneGetBookParams>({
    loading: true,
    book: {}
  })
  const text = () => {
    toast.error("Error")
  }

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
    fetchBook("1").catch(console.error)
  }, [1])

  const bookReviews = data.book.comments
    ?.slice(0, 3)
    .map((value) => <ReviewBookDetail key={value.id} data={value} />)

  useEffect(() => {
    const fetchBook = async (userId: number) => {
      try {
        const data = await Api.user.getUser(Number(userId))
      } catch (error) {
        console.error(`[Book Detail] Error:`, error)
      }
    }
    fetchBook(1).catch(console.error)
  }, [])

  return (
    <main className={clsx("container")}>
      Main page
      <div>
        <button onClick={() => router.push(RouteEnum.SIGN_IN)}>Login</button>
        <button onClick={() => router.push(RouteEnum.SIGN_UP)}>Registration</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={text}>toast</button>
        <div className={"test"}>
          <CheckList label="Select" />
        </div>
        <div className={"test"}>
          {data.loading || !data.book.comments?.length || (
            <div className={clsx(styles.book__review_book)}>
              <div className={clsx(styles.book__review_book__header)}>
                <h3>Review</h3>
                <Button variant="ghost" size="small">
                  See all
                </Button>
              </div>
              <div className={clsx(styles.book__review_book__card)}>{bookReviews}</div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default MainPage
