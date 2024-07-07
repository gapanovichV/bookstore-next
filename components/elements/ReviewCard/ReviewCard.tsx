import clsx from "clsx"

import { Button } from "@/components/elements/Button/Button"

import styles from "./ReviewCard.module.scss"
import { Input } from "@/components/elements/Input/Input"

interface ReviewCardProps {
  className?: string
}
export const ReviewCard = ({ className }: ReviewCardProps) => {
  return (
    <div className={clsx(styles.review, className)}>
      <div className={clsx(styles.review_content)}>
        <div className={clsx(styles.pic)}>
          <img src="/img/testReview.png" alt="review icon" />
        </div>
        <div className={clsx(styles.detail)}>
          <div className={clsx(styles.detail_top)}>
            <div className={clsx(styles.detail_info)}>
              <p className={clsx(styles.detail_info_date)}>2022, 12 Sept</p>{" "}
              {/* TODO: Дата заказа */}
              <h2 className={clsx(styles.detail_info_title)}>
                The Stories of Choo Choo: You're Not as Alone as You Think
              </h2>
            </div>
            <div className={clsx(styles.detail_estimate)}>
              <p className={clsx(styles.detail_estimate_question)}>
                How is the overall quality of this product?
              </p>
              <img src="/img/Star.svg" alt="star" />
            </div>
          </div>
          <div className={clsx(styles.detail_fillbox)}>
            <p>Leave a review for this product</p>
            <Input placeholder="Write your review here" />
          </div>
        </div>
      </div>
      <div className={clsx(styles.review_btn)}>
        <Button variant="ghost" size="small">
          Cancel
        </Button>
        <Button variant="fill" size="small">
          Send
        </Button>
      </div>
    </div>
  )
}
