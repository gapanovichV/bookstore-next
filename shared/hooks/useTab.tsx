"use client"

import { type Dispatch, type SetStateAction, useCallback, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import type { ITab } from "@/shared/components/elements/Tab/Tab"

export interface useTabResponse {
  currentItem: ITab
  changeItem: Dispatch<SetStateAction<number>>
}

export const useTab = (initialTab: number, allTab: ITab[]): useTabResponse => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [currentIndex, setCurrentIndex] = useState(initialTab)

  if (!allTab || !Array.isArray(allTab)) {
    throw new Error("allTab must be an array")
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  return {
    currentItem: allTab[currentIndex],
    changeItem: setCurrentIndex
  }
}
