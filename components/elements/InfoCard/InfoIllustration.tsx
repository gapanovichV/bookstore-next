import clsx from "clsx"

import { Button } from "@/components/elements/Button/Button"
import type { ImageOptions} from "@/hooks/useImage";
import { useImage } from "@/hooks/useImage"

import styles from "./InfoIllustration.module.scss"

type NameImage = "empty" | "failed" | "success"

interface InfoIllustrationProps {
  className?: string
  title?: string
  description?: string
  btnText: string
  nameImage: NameImage
}

const image: ImageOptions[] = [
  { id: "empty", src: "/img/emptyIllustration.svg" },
  { id: "failed", src: "/img/failedIllustration.svg" },
  { id: "success", src: "/img/successIllustration.svg" }
]

export const InfoIllustration = ({
  className,
  title,
  description,
  btnText,
  nameImage
}: InfoIllustrationProps) => {
  const { key } = useImage({ image, nameSearch: nameImage })

  return (
    <div className={clsx(styles.info, className)}>
      <div className={clsx(styles.info__pic)}>
        <img src={key?.src} alt="Illustration" />
      </div>
      <h2 className={clsx(styles.info__title)}>{title}</h2>
      <p className={clsx(styles.info__description)}>{description}</p>
      <Button className={clsx(styles.info__btn)} size="large">
        {btnText}
      </Button>
    </div>
  )
}
