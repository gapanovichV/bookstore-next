"use client"

import React, { useRef, useState } from "react"
import { useClickAway, useDebounce } from "react-use"
import type { ProductItem } from "@prisma/client"
import clsx from "clsx"
import Link from "next/link"

import { Card } from "@/shared/components/elements"
import { Input } from "@/shared/components/elements/Input/Input"
import { Api } from "@/shared/services/api-client"

import styles from "./SearchBar.module.scss"

interface SearchBarProps {
  className?: string
}
export const SearchBar = ({ className }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false)
    setProducts([])
  })

  useDebounce(
    async () => {
      try {
        const response = await Api.products.searchInput(searchQuery)
        setProducts(response)
      } catch (error) {
        console.error("[Search Bar]: Error", error)
      }
    },
    250,
    [searchQuery]
  )
  const onClickItem = () => {
    setFocused(false)
    setSearchQuery("")
    setProducts([])
  }

  return (
    <>
      <div ref={ref} className={clsx(styles.results__container, className)}>
        <Input
          image={{ right: "Search.svg" }}
          type="text"
          autoComplete="off"
          placeholder="What book are you looking for?"
          value={searchQuery}
          onFocus={() => setFocused(true)}
          setValue={setSearchQuery}
        />
        {searchQuery.length > 0 && products.length > 0 &&  (
          <div className={clsx(styles.results__dropdown,{[styles.focused]: focused}, className)}>
            {products.map((book: ProductItem) => (
              <Link onClick={onClickItem} href={`/catalog/book/${book.id}`} key={book.id}>
                <Card key={book.id} size="small" book={book} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}