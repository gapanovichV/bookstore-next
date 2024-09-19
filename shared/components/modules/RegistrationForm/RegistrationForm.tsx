"use client"

import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { z } from "zod"

import { Button, ErrorMessage, Input } from "@/shared/components/elements"
import { registrationDefaultValue } from "@/shared/components/modules/RegistrationForm/registrationForm.data"
import { LOCAL_STORAGE_KEY } from "@/shared/constants"
import { storeToken } from "@/shared/lib/storeToken"
import { handleError } from "@/shared/lib/utils/error"
import api from "@/shared/services/apiInstance"
import { Status } from "@/types/response.type"
import { RouteEnum } from "@/types/route.type"
import { userRegistrationFormScheme } from "@/types/z.type"

import styles from "./RegistrationForm.module.scss"

export type FormRegistrationSchema = z.infer<typeof userRegistrationFormScheme>

export const RegistrationForm = () => {
  const router = useRouter()
  const form = useForm<FormRegistrationSchema>({
    resolver: zodResolver(userRegistrationFormScheme),
    defaultValues: registrationDefaultValue
  })
  const onSubmit: SubmitHandler<FormRegistrationSchema> = async (value) => {
    try {
      const { data } = await api.post("/api/users/signup", value)
      if (data.status === Status.Success) {
        toast.success(data.message)
        await storeToken(data.user_token)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data.user_token))
        router.push(RouteEnum.MAIN)
      }
      if (data.status === Status.Error) {
        toast.error(data.message)
      }
      form.reset()
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <form className={clsx(styles.form)} onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="lastName"
        control={form.control}
        render={({ field, fieldState }) => (
          <div>
            <Input
              {...field}
              isDirty={fieldState.isDirty}
              image={{ left: "Profile.svg" }}
              placeholder="Last Name"
              type="text"
              {...(fieldState.error && { error: fieldState.error.message })}
            />
            <ErrorMessage {...(fieldState.error && { error: fieldState.error.message })} />
          </div>
        )}
      />
      <Controller
        name="firstName"
        control={form.control}
        render={({ field, fieldState }) => (
          <div>
            <Input
              {...field}
              isDirty={fieldState.isDirty}
              image={{ left: "Profile.svg" }}
              placeholder="First Name"
              type="text"
              {...(fieldState.error && { error: fieldState.error.message })}
            />
            <ErrorMessage {...(fieldState.error && { error: fieldState.error.message })} />
          </div>
        )}
      />
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
            <ErrorMessage {...(fieldState.error && { error: fieldState.error.message })} />
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
            <ErrorMessage {...(fieldState.error && { error: fieldState.error.message })} />
          </div>
        )}
      />
      <p className={clsx(styles.text)}>
        By registering, I agree <span>Terms and Conditions</span> and <span>Privacy Policy</span>
      </p>
      <Button
        size="max"
        disabled={!form.formState.isDirty && !form.formState.isValid}
        loading={form.formState.isSubmitting}
        type="submit"
      >
        Register
      </Button>
      <p className={clsx(styles.text, styles.center)}>or</p>
      <p className={clsx(styles.text, styles.center)}>
        Already have an account?{" "}
        <Link href={RouteEnum.SIGN_IN}>
          <span>Login here</span>
        </Link>
      </p>
    </form>
  )
}

export default RegistrationForm
