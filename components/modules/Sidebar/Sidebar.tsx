import clsx from "clsx"

import { Tab } from "@/components/elements/Tab/Tab"
import { useTab } from "@/hooks/useTab"

import styles from "./Sidebar.module.scss"

interface ITab {
  label: string
}

interface SidebarProps {
  className?: string
  tabs: ITab[]
}

export const Sidebar = ({ className, tabs}: SidebarProps) => {

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
