import React, { useState } from "react"
import clsx from "clsx"

import styles from "./Input.module.scss"

type InputProps<
  Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input"
> = {
  label?: string
  error?: string
  type?: string | number
  image?: string
  alt?: string
  isPassword?: boolean
  isDirty: boolean
} & React.ComponentProps<Component>

export const Input = React.forwardRef(
  (
    {
      label,
      className,
      error,
      image,
      type,
      isPassword,
      id: externalId,
      isDirty,
      alt,
      ...props
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [hide, setHide] = useState<boolean>(false)
    const internalId = React.useId()
    const id = externalId ?? internalId

    const toggle = () => {
      setHide((prev) => !prev)
    }
    return (
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.input__wrapper, { [styles.error__wrapper]: !!error })}>
          <img className={clsx(styles.input__img)} src={`img/${image}`} alt={alt ?? id} />
          <input
            className={clsx(styles.input, className, {
              [styles.error__input]: !!error,
              [styles.input__password]: isPassword,
              [styles.input__dirty]: isDirty
            })}
            id={id}
            type={type === "password" && !hide ? "password" : "text"}
            autoComplete="off"
            {...props}
            ref={ref}
          />
          {isPassword && (
            <div className={clsx(styles.icon)} onClick={toggle}>
              {hide ? (
                <img src={`img/HidePass.svg`} alt="Hide password" />
              ) : (
                <img src={`img/ShowPass.svg`} alt="Show password" />
              )}
            </div>
          )}
          {error && !isPassword && (
            <div className={clsx(styles.icon)}>
              <img src={`img/InfoCircle.svg`} alt="Info circle" />
            </div>
          )}
        </div>
        {error && <span className={clsx(styles.error__text)}>{error}</span>}
      </div>
    )
  }
) as <Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input">(
  props: InputProps<Component> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => React.ReactElement
