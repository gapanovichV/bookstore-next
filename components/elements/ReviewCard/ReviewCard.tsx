import { useState } from "react"
import toast from "react-hot-toast"
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
  const [rating, setRating] = useState<number>(0)

  const handleClickSendReview = () => {
    if (reviewText === "") {
      toast.error("Please enter a review text")
      return
    }
    if (rating === 0) {
      toast.error("Please enter a rating product")
      return
    }
    setReviewLeft(true)
  }
  const handleClickCancelReview = () => {
    setReviewText("")
  }

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
                  <StarRating onSetRating={setRating} />
                </>
              ) : (
                <div className={clsx(styles.detail_estimate_star)}>
                  <img src="/img/starFill.svg" alt="star" />
                  <p>{rating}.0</p>
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
              <p className={clsx(styles.detail_fillbox_review)}>{reviewText}</p>
            )}
          </div>
        </div>
      </div>
      <div className={clsx(styles.review_btn, { [styles.reviewLeft]: reviewLeft })}>
        <Button variant="ghost" size="small" onClick={handleClickCancelReview}>
          Cancel
        </Button>
        <Button onClick={handleClickSendReview} variant="fill" size="small">
          Send
        </Button>
      </div>
    </div>
  )
}
