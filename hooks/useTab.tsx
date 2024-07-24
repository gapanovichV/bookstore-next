"use client"

import type { Dispatch, SetStateAction } from "react"
import { useState } from "react"

export interface useTabResponse {
  currentItem: { label: string }
  changeItem: Dispatch<SetStateAction<number>>
}

export const useTab = (initialTab: number, allTab: { label: string }[]): useTabResponse => {
  const [currentIndex, setCurrentIndex] = useState(initialTab)

  if (!allTab || !Array.isArray(allTab)) {
    throw new Error("allTab must be an array")
  }
  return {
    currentItem: allTab[currentIndex],
    changeItem: setCurrentIndex
  }
}
