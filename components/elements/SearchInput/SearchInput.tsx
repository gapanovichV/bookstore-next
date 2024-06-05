import React from "react"
import clsx from "clsx"

import styles from "./SearchInput.module.scss"

type SearchInputProps<
  Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input"
> = {
  label?: string
  value: string | { value: string; label: string }
  setSearchText: (value: string) => void
} & React.ComponentProps<Component>

export const SearchInput = React.forwardRef(
  (
    { label, value, className, setSearchText, ...props }: SearchInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={clsx(styles.input__wrapper)}>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={value}
          type="text"
          className={clsx(styles.input)}
          autoComplete="off"
          placeholder="What book are you looking for?"
          {...props}
          ref={ref}
        />
        <img className={clsx(styles.icon)} src={`img/Search.svg`} alt="Search" />
      </div>
    )
  }
) as <Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input">(
  props: SearchInputProps<Component> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => React.ReactElement
