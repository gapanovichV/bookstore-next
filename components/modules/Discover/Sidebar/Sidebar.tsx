import clsx from "clsx"

import { Tab } from "@/components/elements/Tab/Tab"
import { useTab } from "@/hooks/useTab"

import styles from "./Sidebar.module.scss"

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const tabs = [
    { label: "Fiction & Literature" },
    { label: "Non Fiction" },
    { label: "Comic" },
    { label: "Children Book" }
  ]
  const { currentItem, changeItem } = useTab(0, tabs)

  return (
    <div className={clsx(styles.sidebar, className)}>
      <Tab
        tabs={tabs}
        currentItem={currentItem}
        changeItem={changeItem}
        position={"vertical"}
        visibleLine={false}
      />
    </div>
  )
}
