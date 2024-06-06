"use client"

import { useEffect, useState } from "react"
import clsx from "clsx"

import { SearchInput } from "@/components/elements/SearchInput/SearchInput"

import styles from "./SearchResults.module.scss"

interface SearchResultsProps {
  className?: string
}
export const SearchResults = ({className}: SearchResultsProps) => {
  const [searchText, setSearchText] = useState<string>("")
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState<boolean>(false)

  // TODO: Получекние книг по название

  useEffect(() => {
    if (results.length > 0 && !showResults) setShowResults(true)
    if (results.length <= 0) setShowResults(false)
  }, [results])

  return (
    <div className={clsx(styles.results__container, className)}>
      <SearchInput value={searchText} setSearchText={setSearchText} />
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
