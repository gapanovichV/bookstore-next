"use client"

import React from "react"
import toast from "react-hot-toast"
import clsx from "clsx"

import api from "@/api/apiInstance"
import { Content } from "@/components/modules/Discover/Content/Content"
import { Topbar } from "@/components/modules/Discover/Topbar/Topbar"
import { Sidebar } from "@/components/modules/Sidebar/Sidebar"
import { handleError } from "@/lib/utils/error"
import { Status } from "@/types/response.type"

import styles from "./DiscoverPage.module.scss"

const DiscoverPage = () => {
  const SidebarTabs = [
    { label: "Fiction & Literature" },
    { label: "Non Fiction" },
    { label: "Comic" },
    { label: "Children Book" }
  ]
  const testGetOneBook = async (bookId: string) => {
    try {
      const { data } = await api.post("/api/books/oneBook", { bookId })
      if (data.status === Status.Success) {
        toast.success(data.book.title)
      }
    } catch (error) {
      handleError(error)
    }
  }

  const testPOSTbook = async () => {
    const value = {
      title: "ReactJS by Example - Building Modern Web Applications with React",
      authors: ["Vipul A M", "Prathamesh Sonpatki"],
      publisher: "Packt Publishing Ltd",
      publishedDate: "2016-04-21",
      description:
        "Get up and running with ReactJS by developing five cutting-edge and responsive projects About This Book Create pragmatic real-world applications while learning React and its modern developer tools Build sustainable user interfaces by transforming data into components of UI Learn how to generate reusable ReactJS components effectively Who This Book Is For If you are a web developer and wish to learn ReactJS from scratch, then this book is tailor-made for you. Good understanding of Javascript, HTML,",
      pageCount: 280,
      categories: ["Computers"],
      imageUrl:
        "https://books.google.com/books/content?id=Ht3JDAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&source=gbs_api",
      language: "en"
    }
    try {
      const { data } = await api.post("/api/books/addBook", value)
      if (data.status === Status.Success) {
        toast.success(data.message)
      }
    } catch (error) {
      handleError(error)
    }
  }
  return (
    <main>
      <div className={clsx(styles.tab)}>
        <div className={clsx("container")}>
          <Topbar />
        </div>
      </div>
      <div className={clsx("container")}>
        <div className={clsx(styles.content)}>
          <Sidebar tabs={SidebarTabs} />
          <Content />
        </div>
      </div>
    </main>
  )
}

export default DiscoverPage
