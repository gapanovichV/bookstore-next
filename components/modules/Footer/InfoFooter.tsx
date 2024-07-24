import clsx from "clsx"

import { Button, Logo } from "@/components/elements"

import styles from "./InfoFooter.module.scss"

export const InfoFooter = () => {
  return (
    <div className={clsx(styles.info)}>
      <Logo logoIsIcon={false} />
      <p className={clsx(styles.info__text)}>
        The largest, most complete and trusted online bookstore in the wolrd. With us, you can shop
        online & help save your high street at the same time
      </p>
      <div className={clsx(styles.info__btn)}>
        <Button size="medium">Google Play</Button>
        <Button size="medium" variant="line">
          Play Store
        </Button>
      </div>
    </div>
  )
}
