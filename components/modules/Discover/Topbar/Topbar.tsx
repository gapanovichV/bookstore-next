"use client"

import React from "react"

import { Tab } from "@/components/elements/Tab/Tab"
import { useTab } from "@/hooks/useTab"

export const Topbar = () => {
  const tabs = [{ label: "All Books" }, { label: "What’s new" }, { label: "Popular" }]
  const { currentItem, changeItem } = useTab(0, tabs)

  return <Tab position="horizontal" tabs={tabs} currentItem={currentItem} changeItem={changeItem} />
}
