import type { UseFormReturn } from "react-hook-form"
import toast from "react-hot-toast"
import { AxiosError } from "axios"
import type { useRouter } from "next/navigation"

import type { FormLoginSchema } from "@/shared/components/modules/LoginForm/LoginForm"
import type { FormRegistrationSchema } from "@/shared/components/modules/RegistrationForm/RegistrationForm"
import { LOCAL_STORAGE_KEY } from "@/shared/constants"
import { storeToken } from "@/shared/lib/storeToken"
import { RouteEnum } from "@/types/route.type"

type FormValues = FormLoginSchema | FormRegistrationSchema


export const LoginAndRegistrationSubmit = async <T extends FormValues>(
  form: UseFormReturn<T>,
  apiFunction: (value: T) => Promise<{ token: { accessToken: string; refreshToken: string } }>,
  value: T,
  successMessage: string,
  router: ReturnType<typeof useRouter>
) => {
  try {
    const { token } = await apiFunction(value)
    toast.success(successMessage)
    await storeToken({ accessToken: token.accessToken, refreshToken: token.refreshToken })
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(token))
    router.push(RouteEnum.MAIN)
  } catch (error) {
    let errorMessage = "Error!"

    if (error instanceof AxiosError && error.response) {
      errorMessage = error.response.data.error || errorMessage
    }

    toast.error(errorMessage)
  } finally {
    form.reset()
  }
}
