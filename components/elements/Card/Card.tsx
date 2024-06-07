import clsx from "clsx"

import styles from  "./Card.module.scss"

type CardSize = 'small' | 'medium' | 'large' | 'mobile'

interface CardProps {
  className?: string;
  size?: CardSize
}

export const Card = ({className, size = 'mobile'}: CardProps) => {
  return (
    <div className={clsx(styles.card, styles[size], className)}>
      <div className={clsx(styles.card__img)}>
        <img src="/img/PicCardTEST.png" alt="Pic Card" />
      </div>
      <div className={clsx(styles.card__info)}>
        <p className={clsx(styles.card__info__title)}>The Miracles of the Namiya General Store</p>
        <div className={clsx(styles.card__info__line)}></div>
        <div className={clsx(styles.card__info__book)}>
          <div className={clsx(styles.card__info__book_top)}>
            <p>Writer</p>
            <p>Buy now</p>
          </div>
          <div className={clsx(styles.card__info__book_down)}>
            <p className={clsx(styles.card__info__book_author)}>Keigo Higashino</p>
            <div className={clsx(styles.card__info__book_price)}>
              <span className={clsx(styles.card__info__book_price_discont)}>$23.5</span>$19.0
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}