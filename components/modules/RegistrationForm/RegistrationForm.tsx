"use client"

import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import Link from "next/link"
import type { z } from "zod"

import { Button } from "@/components/elements/Button/Button"
import { Input } from "@/components/elements/Input/Input"
import { registrationDefaultValue } from "@/components/modules/RegistrationForm/registrationForm.data"
import { RouteEnum } from "@/types/route.type"
import { userRegistrationFormScheme } from "@/types/z.type"

import styles from "./RegistrationForm.module.scss"

export type FormRegistrationSchema = z.infer<typeof userRegistrationFormScheme>

const RegistrationForm = () => {
  const form = useForm<FormRegistrationSchema>({
    resolver: zodResolver(userRegistrationFormScheme),
    defaultValues: registrationDefaultValue
  })

  const onSubmit: SubmitHandler<FormRegistrationSchema> = (data) => {
    console.log(data)
  }

  return (
    <form className={clsx(styles.form)} onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="lastName"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            isDirty={fieldState.isDirty}
            image="Profile.svg"
            placeholder="Last Name"
            type="text"
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
      <Controller
        name="firstName"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            isDirty={fieldState.isDirty}
            image="Profile.svg"
            placeholder="First Name"
            type="text"
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
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
      <p className={clsx(styles.text)}>By registering, I agree <span>Terms and Conditions</span> and <span>Privacy Policy</span></p>
      <Button
        disabled={!form.formState.isDirty && !form.formState.isValid}
        loading={form.formState.isSubmitting}
        type="submit"
      >
        Register
      </Button>
      <p className={clsx(styles.text, styles.center)}>or</p>
      <p className={clsx(styles.text, styles.center)}>Already have an account? <Link href={RouteEnum.SIGN_IN}><span>Login here</span></Link></p>
    </form>
  )
}

export default RegistrationForm
