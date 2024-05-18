import clsx from "clsx"

import styles from "./SignUp.module.scss"
import Input from "@/components/elements/FormField/Input"

const SingUpPage = () => {
  return (
    <div className={clsx(styles.auth)}>
      <div className={clsx(styles.auth__left)}>
        <div className={clsx(styles.auth__text)}>
          <h1 className={clsx(styles.auth__text__main)}>Sign Up</h1>
          <div className={clsx(styles.auth__text__descr)}>
            Are you looking for a great gift for a friend, family member or yourself? Have a look on
            our website to find the perfect book for you!
          </div>
        </div>
      </div>
      <div className={clsx(styles.auth__right)}>
        <div className={clsx(styles.auth__form)}>
          <Input image="Profile.svg" placeholder={"Full name"} />
        </div>
      </div>
    </div>
  )
}

export default SingUpPage
