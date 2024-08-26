import clsx from "clsx"

import styles from "./ReviewBookDetail.module.scss"

interface ReviewBookDetailProps {
  className?: string;
}

export const ReviewBookDetail = ({ className }: ReviewBookDetailProps) => {
  return (
    <div className={clsx(styles.review, className)}>
      <div className={clsx(styles.review__pic)}>
        <img src="/img/ProfileTEST.png" alt="Profile TEST" />
      </div>
      <div className={clsx(styles.review__detail)}>
        <div className={clsx(styles.review__detail__star)}>
          <img src="/img/starFill.svg" alt="star" />
          <p>5.0</p>
        </div>
        <div className={clsx(styles.review__detail__text)}>
          <p className={clsx(styles.review__detail__text__author)}>Jeremy Zucker</p>
          <p className={clsx(styles.review__detail__text__review)}>The Stories of Choo Choo is a compilation of drawings created
            by Citra Marina during her daily train ride on Jakarta Commuter Line.</p>
        </div>
      </div>
    </div>
  )
}