"use client"

import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { z } from "zod"

import { Button } from "@/components/elements/Button/Button"
import { Input } from "@/components/elements/Input/Input"
import { loginDefaultValue } from "@/components/modules/LoginForm/loginForm.data"
import { LOCAL_STORAGE_KEY } from "@/constants"
import { loginUser } from "@/lib/actions/user.actions"
import { handleError } from "@/lib/utils"
import { Status } from "@/types/response.type"
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

  const onSubmit: SubmitHandler<FormLoginSchema> = async (data) => {
    try {
      const response = await loginUser(data)

      if (response.status === Status.SuccessOK) {
        toast.success(response.message)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response.user_token))

        router.push(RouteEnum.MAIN)
      }

      if (response.status === Status.ClientErrorBadRequest) {
        toast.error(response.message)
      }
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <form className={clsx(styles.form)} onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            isDirty={fieldState.isDirty}
            image="Email.svg"
            placeholder="Email"
            type="email"
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            isDirty={fieldState.isDirty}
            image="Password.svg"
            placeholder="Password"
            type="password"
            isPassword={true}
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
      <Button
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
