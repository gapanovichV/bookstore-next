import React from "react"
import clsx from "clsx"

import styles from "./Button.module.scss"

type ButtonVariant = "fill" | "line" | "ghost"

interface ButtonProps extends React.ComponentProps<"button"> {
  loading?: boolean
  variant?: ButtonVariant
  children: React.ReactNode
}

export const Button = React.forwardRef(
  (
    { loading, children, variant = "fill", className, ...props }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        className={clsx(
          "btn-reset",
          styles.button,
          styles[variant],
          { [styles.loading]: loading },
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)
