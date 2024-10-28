"use client"

import React from "react"
import clsx from "clsx"
import { useSearchParams } from "next/navigation"

import { Filter } from "@/shared/components/elements/Filter/Filter"
import {
  CategoriesEnum,
  searchParamsName
} from "@/shared/components/elements/Filter/FilterConstants"

import styles from "./Sidebar.module.scss"

export const Sidebar = () => {
  const searchParams = useSearchParams()

  function convertToCategory(str: string | null): CategoriesEnum | null {
    if (Object.values(CategoriesEnum).includes(str as CategoriesEnum)) {
      return str as CategoriesEnum
    }
    return null
  }
  return (
    <>
      <div className={clsx(styles.sidebar)}>
        <Filter
          bookCategory={
            convertToCategory(searchParams.get(searchParamsName.CATEGORY)) ??
            CategoriesEnum.COMPUTERS
          }
        />
      </div>
    </>
  )
}
