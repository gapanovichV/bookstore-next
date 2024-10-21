import React from "react"
import clsx from "clsx"
import Link from "next/link"

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
  return (
    <div className={clsx(styles.filter, className)}>
      {filterByCategories.map((variant: FilterByCategoriesProps, index: number) => (
        <Link key={index} href={{ query: { category: variant.value } }}>
          {variant.name}
        </Link>
      ))}
    </div>
  )
}
