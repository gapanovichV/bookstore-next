"use client"

import React from "react"

import type { ITab } from "@/components/elements/Tab/Tab"
import { Tab } from "@/components/elements/Tab/Tab"
import { useTab } from "@/hooks/useTab"

export const Topbar = () => {
  const tabs: ITab[] = [
    { id: 1, label: "All Books" },
    { id: 2, label: "What’s new" },
    { id: 3, label: "Popular" }
  ]
  const { currentItem, changeItem } = useTab(0, tabs)

  return <Tab position="horizontal" tabs={tabs} currentItem={currentItem} changeItem={changeItem} />
}
