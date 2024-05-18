import clsx from "clsx"

import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx("container", styles.header__container)}></div>
    </header>
  )
}

export default Header
