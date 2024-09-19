import clsx from "clsx"

import styles from "./Dropdown.module.scss"

interface DropdownProps {
  className?: string
  text?: string
}

export const Dropdown = ({ className, text }: DropdownProps) => {
  return (
    <>
      <div className={clsx(styles.dropdown__container, className)}>
        <div className={clsx(styles.dropdown__text)}>{text}</div>
      </div>
    </>
  )
}
