"use client"

import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { z } from "zod"

import { Button } from "@/components/elements/Button/Button"
import { ErrorMassage } from "@/components/elements/ErrorMassage/ErrorMassage"
import { Input } from "@/components/elements/Input/Input"
import { loginDefaultValue } from "@/components/modules/LoginForm/loginForm.data"
import { useSubmitHandler } from "@/hooks/useSubmitHandler"
import { RouteEnum } from "@/types/route.type"
import { userLoginFormScheme } from "@/types/z.type"

import styles from "./LoginForm.module.scss"

export type FormLoginSchema = z.infer<typeof userLoginFormScheme>

const LoginForm = () => {
  const router = useRouter()
  const form = useForm<FormLoginSchema>({
    resolver: zodResolver(userLoginFormScheme),
    defaultValues: loginDefaultValue
  })

  const onSubmit: SubmitHandler<FormLoginSchema> = async (value) => {
    await useSubmitHandler({ path: "/api/users/login", value })
  }

  return (
    <form className={clsx(styles.form)} onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <div>
            <Input
              {...field}
              isDirty={fieldState.isDirty}
              image={{ left: "Email.svg" }}
              placeholder="Email"
              type="email"
              {...(fieldState.error && { error: fieldState.error.message })}
            />
            <ErrorMassage {...(fieldState.error && { error: fieldState.error.message })} />
          </div>
        )}
      />
      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <div>
            <Input
              {...field}
              isDirty={fieldState.isDirty}
              image={{ left: "Password.svg" }}
              placeholder="Password"
              type="password"
              isPassword={true}
              {...(fieldState.error && { error: fieldState.error.message })}
            />
            <ErrorMassage {...(fieldState.error && { error: fieldState.error.message })} />
          </div>
        )}
      />
      <Button
        size="max"
        disabled={!form.formState.isDirty && !form.formState.isValid}
        loading={form.formState.isSubmitting}
        type="submit"
      >
        Login
      </Button>
      <p className={clsx(styles.text, styles.center)}>or</p>
      <p className={clsx(styles.text, styles.center)}>
        Don’t have an account?{" "}
        <Link href={RouteEnum.SIGN_UP}>
          <span>Sign Up here</span>
        </Link>
      </p>
    </form>
  )
}

export default LoginForm
