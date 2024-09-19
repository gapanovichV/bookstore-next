import clsx from "clsx"

import styles from "./BookDetailComponents.module.scss"

interface BookDetailProps {
  imageUrl?: string
}

export const BookCover = ({ imageUrl }: BookDetailProps) => {
  return (
    <div className={clsx(styles.cover)}>
      <div className={clsx(styles.cover__img)}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  )
}
