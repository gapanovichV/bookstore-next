"use client"

import type { Dispatch, SetStateAction } from "react"
import { useState } from "react"

import type { ITab } from "@/components/elements/Tab/Tab"

export interface useTabResponse {
  currentItem: ITab
  changeItem: Dispatch<SetStateAction<number>>
}

export const useTab = (initialTab: number, allTab: ITab[]): useTabResponse => {
  const [currentIndex, setCurrentIndex] = useState(initialTab)

  if (!allTab || !Array.isArray(allTab)) {
    throw new Error("allTab must be an array")
  }
  return {
    currentItem: allTab[currentIndex],
    changeItem: setCurrentIndex
  }
}
