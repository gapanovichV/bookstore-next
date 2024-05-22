"use client"

import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { z } from "zod";

import { Button } from "@/components/elements/Button/Button"
import { Input } from "@/components/elements/Input/Input"
import { registrationDefaultValue } from "@/components/modules/RegistrationForm/registrationForm.data"
import { userFormScheme } from "@/types/z.type"

export type FormSchema = z.infer<typeof userFormScheme>

const RegistrationForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(userFormScheme),
    defaultValues: registrationDefaultValue
  })

  console.log("@From", form.formState.isDirty, form.formState.isValid)

  const onSubmit: SubmitHandler<FormSchema> = (data: FormSchema) => {
    console.log(data)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="lastName"
        control={form.control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
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
            image="Password.svg"
            placeholder="Password"
            type="password"
            isPassword={true}
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />
      <Button disabled={!form.formState.isDirty && !form.formState.isValid} loading={form.formState.isSubmitting} type="submit">
        Register
      </Button>
    </form>
  )
}

export default RegistrationForm
