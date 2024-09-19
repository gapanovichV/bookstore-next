import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

import type { FormLoginSchema } from "@/shared/components/modules/LoginForm/LoginForm"
import type { FormRegistrationSchema } from "@/shared/components/modules/RegistrationForm/RegistrationForm"
import { LOCAL_STORAGE_KEY } from "@/shared/constants"
import { storeToken } from "@/shared/lib/storeToken"
import { handleError } from "@/shared/lib/utils/error"
import api from "@/shared/services/apiInstance"
import { Status } from "@/types/response.type"
import { RouteEnum } from "@/types/route.type"

interface useSubmitHandlerProps {
  path: string
  value: FormLoginSchema | FormRegistrationSchema
}
export const useSubmitHandler = async ({ path, value }: useSubmitHandlerProps) => {
  const router = useRouter()

  try {
    const { data } = await api.post(path, value)
    if (data.status === Status.Success) {
      toast.success(data.message)
      await storeToken(data.user_token)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data.user_token))
      return router.push(RouteEnum.MAIN)
    }
    if (data.status === Status.Error) {
      toast.error(data.message)
    }
  } catch (error) {
    handleError(error)
  }
}
