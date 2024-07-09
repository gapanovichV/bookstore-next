import clsx from "clsx"

import { Button } from "@/components/elements/Button/Button"
import { Tag } from "@/components/elements/Tag/Tag"

import styles from "./PurchaseCard.module.scss"

interface PurchaseCardProps {
  className?: string
}
export const PurchaseCard = ({ className }: PurchaseCardProps) => {
  return (
    <div className={clsx(styles.purchase, className)}>
      <div className={clsx(styles.small_info)}>
        <div className={clsx(styles.small_info__info)}>
          <p className={clsx(styles.small_inof__date)}>2022, 12 Sept</p>
        </div>
        <Tag status={true} color="green">
          Done
        </Tag>
      </div>
      <div className={clsx(styles.content)}>
        <div className={clsx(styles.content__info)}>
          <div className={clsx(styles.content__info__pic)}>
            <img src="/img/testReview.png" alt="Book сover" />
          </div>
          <div className={clsx(styles.content__info__text)}>
            <p className={clsx(styles.content__info__title)}>
              The Stories of Choo Choo: You're Not as Alone as You Think
            </p>
            <p className={clsx(styles.content__info__price)}>
              1 book x $19.5 {/* TODO: Количество книг в заказе и стомость одной книги */}
            </p>
          </div>
        </div>
        <div className={clsx(styles.content__section)}>
          <p className={clsx(styles.content__section__price)}>
            Total<span>$19.5</span>
          </p>
          <div className={clsx(styles.content__section__btn)}>
            <Button size="small">Give Review</Button>
            <Button size="small" variant="line">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
