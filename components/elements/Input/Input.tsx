import React, { useState } from "react"
import clsx from "clsx"

import styles from "./Input.module.scss"

type InputProps<
  Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input"
> = {
  label?: string
  error?: string
  type?: string | number
  image?: {
    right?: string
    left?: string
  }
  alt?: string
  isPassword?: boolean
  isDirty?: boolean
  value?: string
  setValue?: (value: string) => void
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
      value,
      setValue,
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
      <div className={clsx(styles.input__wrapper, { [styles.error__wrapper]: !!error })}>
        {image?.left && (
          <img className={clsx(styles.input__img)} src={`img/${image?.left}`} alt={alt ?? id} />
        )}
        <input
          className={clsx(styles.input, className, {
            [styles.error__input]: !!error,
            [styles.input__password]: isPassword,
            [styles.input__icon_right]: !!image?.right,
            [styles.input__icon_left]: !image?.left,
            [styles.input__dirty]: isDirty
          })}
          id={id}
          value={value}
          onChange={(e) => setValue && setValue(e.target.value)}
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
        {image?.right && (
          <div className={clsx(styles.icon)}>
            <img src={`img/${image?.right}`} alt="Info circle" />
          </div>
        )}
      </div>
    )
  }
) as <Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input">(
  props: InputProps<Component> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => React.ReactElement
