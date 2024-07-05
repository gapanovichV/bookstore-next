import clsx from "clsx"

import styles from "./Dropdown.module.scss"

interface DropdownProps {
  className?: string
}

export const Dropdown = ({ className }: DropdownProps) => {
  return (
    <>
      <div className={clsx(styles.dropdown_container, className)}></div>
    </>
  )
}
