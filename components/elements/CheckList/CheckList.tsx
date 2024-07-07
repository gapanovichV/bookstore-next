import type { ReactNode } from "react"
import React from "react"
import clsx from "clsx"

import styles from "./CheckList.module.scss"

type CheckListProps<
  Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input"
> = {
  className?: string
  label: string
  children?: ReactNode
} & React.ComponentProps<Component>

export const CheckList = React.forwardRef(
  (
    { className, label, id: externalId }: CheckListProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const internalId = React.useId()
    const id = externalId ?? internalId

    return (
      <label htmlFor={id} className={clsx(styles.checkbox_container, className)}>
        <input className={clsx(styles.checkbox)} type="checkbox" defaultChecked={true} />
        <span className={clsx(styles.custom_checkbox)} />
        <span className={clsx(styles.label)}>{label}</span>
        <span className={clsx(styles.custom_checkbox)} />
      </label>
    )
  }
) as <Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = "input">(
  props: CheckListProps<Component> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => React.ReactElement
