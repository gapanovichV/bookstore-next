import { useState } from "react"
import clsx from "clsx"

import { Button } from "@/components/elements/Button/Button"
import { Input } from "@/components/elements/Input/Input"
import { StarRating } from "@/components/elements/StarRating/StarRating"

import styles from "./ReviewCard.module.scss"

interface ReviewCardProps {
  className?: string
}
export const ReviewCard = ({ className }: ReviewCardProps) => {
  const [reviewText, setReviewText] = useState<string>("")
  const [reviewLeft, setReviewLeft] = useState<boolean>(false)
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
              {!reviewLeft ? (
                <>
                  <p className={clsx(styles.detail_estimate_question)}>
                    How is the overall quality of this product?
                  </p>
                  <StarRating />
                </>
              ) : (
                <div className={clsx(styles.detail_estimate_star)}>
                  <img src="/img/starFill.svg" alt="star" />
                  <p>5.0</p>
                </div>
              )}
            </div>
          </div>
          <div className={clsx(styles.detail_fillbox)}>
            {!reviewLeft ? (
              <>
                <p>Leave a review for this product</p>
                <Input
                  placeholder="Write your review here"
                  value={reviewText}
                  setValue={setReviewText}
                />
              </>
            ) : (
              <p className={clsx(styles.detail_fillbox_review)}>
                The author is very smart in conveying the story so that it touches the heart of the
                reader explicitly
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={clsx(styles.review_btn, { [styles.reviewLeft]: reviewLeft })}>
        <Button variant="ghost" size="small" onClick={() => setReviewText("")}>
          Cancel
        </Button>
        <Button variant="fill" size="small">
          Send
        </Button>
      </div>
    </div>
  )
}
