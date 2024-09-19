import clsx from "clsx"

import styles from "./ProfilePicture.module.scss"

interface ProfilePicProps {
  className?: string
  size?: "small" | "big"
  src?: string
}

export const ProfilePicture = ({
  size = "small",
  src = "/img/ProfileTEST.png",
  className
}: ProfilePicProps) => {
  return (
    <img className={clsx(styles.img, styles[size], className)} src={src} alt="Profile picture" />
  )
}
