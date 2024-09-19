"use client"

import { useEffect, useState } from "react"
import clsx from "clsx"

import { Input } from "@/shared/components/elements/Input/Input"

import styles from "./SearchBar.module.scss"

interface SearchBarProps {
  className?: string
}
export const SearchBar = ({ className }: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>("")
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState<boolean>(false)

  // TODO: Получекние книг по название
  // TODO: DropDown поиск книг

  useEffect(() => {
    if (results.length > 0 && !showResults) setShowResults(true)
    if (results.length <= 0) setShowResults(false)
  }, [results])

  return (
    <div className={clsx(styles.results__container, className)}>
      <Input
        image={{ right: "Search.svg" }}
        type="text"
        autoComplete="off"
        placeholder="What book are you looking for?"
        value={searchText}
        setValue={setSearchText}
      />
      {showResults && (
        <div className={clsx(styles.dropdown)}>
          <div className={clsx(styles.dropdown__line)}></div>
          {results.map((book) => (
            <div>{book}</div>
          ))}
        </div>
      )}
    </div>
  )
}
