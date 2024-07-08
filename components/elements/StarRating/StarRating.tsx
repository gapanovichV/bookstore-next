import { useState } from "react"
import clsx from "clsx"

import styles from "./StarRating.module.scss"

interface StarRatingProps {
  className?: string
  defaultRating?: number
  onSetRating?: (rating: number) => void
}

interface StarProps {
  filled: boolean
  onClick: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }: StarProps) => {
  return (
    <button
      title="button star"
      type="button"
      className={clsx("btn-reset", styles.star)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {filled ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9189 14.32C17.6599 14.571 17.5409 14.934 17.5999 15.29L18.4889 20.21C18.5639 20.627 18.3879 21.049 18.0389 21.29C17.6969 21.54 17.2419 21.57 16.8689 21.37L12.4399 19.06C12.2859 18.978 12.1149 18.934 11.9399 18.929H11.6689C11.5749 18.943 11.4829 18.973 11.3989 19.019L6.96888 21.34C6.74988 21.45 6.50188 21.489 6.25888 21.45C5.66688 21.338 5.27188 20.774 5.36888 20.179L6.25888 15.259C6.31788 14.9 6.19888 14.535 5.93988 14.28L2.32888 10.78C2.02688 10.487 1.92188 10.047 2.05988 9.65C2.19388 9.254 2.53588 8.965 2.94888 8.9L7.91888 8.179C8.29688 8.14 8.62888 7.91 8.79888 7.57L10.9889 3.08C11.0409 2.98 11.1079 2.888 11.1889 2.81L11.2789 2.74C11.3259 2.688 11.3799 2.645 11.4399 2.61L11.5489 2.57L11.7189 2.5H12.1399C12.5159 2.539 12.8469 2.764 13.0199 3.1L15.2389 7.57C15.3989 7.897 15.7099 8.124 16.0689 8.179L21.0389 8.9C21.4589 8.96 21.8099 9.25 21.9489 9.65C22.0799 10.051 21.9669 10.491 21.6589 10.78L17.9189 14.32Z"
            fill="#1A1A1A"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9184 14.3202C17.6594 14.5712 17.5404 14.9342 17.5994 15.2902L18.4884 20.2102C18.5634 20.6272 18.3874 21.0492 18.0384 21.2902C17.6964 21.5402 17.2414 21.5702 16.8684 21.3702L12.4394 19.0602C12.2854 18.9782 12.1144 18.9342 11.9394 18.9292H11.6684C11.5744 18.9432 11.4824 18.9732 11.3984 19.0192L6.96839 21.3402C6.74939 21.4502 6.50139 21.4892 6.25839 21.4502C5.66639 21.3382 5.27139 20.7742 5.36839 20.1792L6.25839 15.2592C6.31739 14.9002 6.19839 14.5352 5.93939 14.2802L2.32839 10.7802C2.02639 10.4872 1.92139 10.0472 2.05939 9.65025C2.19339 9.25425 2.53539 8.96525 2.94839 8.90024L7.91839 8.17924C8.29639 8.14024 8.62839 7.91024 8.79839 7.57024L10.9884 3.08024C11.0404 2.98024 11.1074 2.88824 11.1884 2.81024L11.2784 2.74024C11.3254 2.68824 11.3794 2.64524 11.4394 2.61024L11.5484 2.57024L11.7184 2.50024H12.1394C12.5154 2.53924 12.8464 2.76424 13.0194 3.10024L15.2384 7.57024C15.3984 7.89724 15.7094 8.12424 16.0684 8.17924L21.0384 8.90024C21.4584 8.96025 21.8094 9.25025 21.9484 9.65025C22.0794 10.0512 21.9664 10.4912 21.6584 10.7802L17.9184 14.3202Z"
            stroke="#333333"
            strokeWidth="1.5"
          />
        </svg>
      )}
    </button>
  )
}

const message = ["Bad", "Average", "Ok", "Good", "Very good"]

export const StarRating = ({ defaultRating = 0, onSetRating, className }: StarRatingProps) => {
  const [rating, setRating] = useState(defaultRating)
  const [hover, setHover] = useState(0)

  const handleRating = (rating: number) => {
    setRating(rating)
    if (onSetRating) {
      onSetRating(rating)
    }
  }
  return (
    <div className={clsx(styles.rating)}>
      <div className={clsx(styles.rating_star, className)}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            filled={hover ? hover >= i + 1 : rating >= i + 1}
            onClick={() => handleRating(i + 1)}
            onMouseEnter={() => setHover(i + 1)}
            onMouseLeave={() => setHover(0)}
          />
        ))}
      </div>
      <p>{message.length === 5 && message[hover ? hover - 1 : rating - 1]}</p>
    </div>
  )
}
