import React, { useRef } from "react"
import clsx from "clsx"

import styles from "./FormField.module.scss"

type InputProps<
  Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input"
> = {
  className?: string
  label?: string
  error?: string
  type?: string | number
  alt?: string
  image?: string
} & React.ComponentProps<Component>

const Input = React.forwardRef(
  (
    { label, className, error, image, type, id: externalId, alt, ...props }: InputProps<"input">,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const internalId = React.useId()
    const id = externalId ?? internalId

    return (
        <div  className={clsx(styles.input__wrapper, className)}>
          <img src={`img/${image}`} alt={alt} />
          <input
            className={clsx(styles.input)}
            id={id}
            type={type}
            {...props}
            ref={ref}
          />
        </div>
    )
  }
) as <Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input">(
  props: InputProps<Component> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => React.ReactElement

export default Input