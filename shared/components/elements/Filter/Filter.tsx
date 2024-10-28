"use client"

import React from "react"
import clsx from "clsx"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { RouteEnum } from "@/types/route.type"

import {
  type CategoriesEnum,
  filterByCategories,
  type FilterByCategoriesProps
} from "./FilterConstants"

import styles from "./Filter.module.scss"

interface FilterProps {
  className?: string
  bookCategory: CategoriesEnum
}

export const Filter = ({ className }: FilterProps) => {
  const params = useSearchParams()
  const active = params.get("category") || ""

  const toggleMultipleQuery = (key: string, value: string) => {
    const query = Object.fromEntries(params)

    let values = query[key] ? query[key].split(",") : []

    if (values.includes(value)) {
      values = values.filter((v) => v !== value)
    } else {
      values.push(value)
    }

    if (values.length === 0) {
      delete query[key]
    } else {
      query[key] = values.join(",")
    }
    return query
  }
  return (
    <div className={clsx(styles.filter, className)}>
      {filterByCategories.map((category: FilterByCategoriesProps, index: number) => (
        <Link
          className={clsx(styles.filter__label, {
            [styles.active]: active.includes(category.value)
          })}
          key={index}
          href={{
            pathname: RouteEnum.CATALOG,
            query: toggleMultipleQuery("category", category.value)
          }}
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}
