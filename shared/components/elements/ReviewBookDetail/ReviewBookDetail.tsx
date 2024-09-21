import type { CommentItems } from "@prisma/client"
import clsx from "clsx"

import styles from "./ReviewBookDetail.module.scss"

interface ReviewBookDetailProps {
  className?: string
  data: CommentItems
}

export const ReviewBookDetail = ({ data, className }: ReviewBookDetailProps) => {
  return (
    <div className={clsx(styles.review, className)}>
      <div className={clsx(styles.review__pic)}>
        <img src="/img/ProfileTEST.png" alt="Profile TEST" />
      </div>
      <div className={clsx(styles.review__detail)}>
        <div className={clsx(styles.review__detail__star)}>
          <img src="/img/starFill.svg" alt="star" />
          <p>{data?.estimation}.0</p>
        </div>
        <div className={clsx(styles.review__detail__text)}>
          <p className={clsx(styles.review__detail__text__author)}>Jeremy Zucker</p>
          <p className={clsx(styles.review__detail__text__review)}>{data?.commentText}</p>
        </div>
      </div>
    </div>
  )
}
