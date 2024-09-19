import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

import api from "@/api/apiInstance"
import type { FormLoginSchema } from "@/components/modules/LoginForm/LoginForm"
import type { FormRegistrationSchema } from "@/components/modules/RegistrationForm/RegistrationForm"
import { LOCAL_STORAGE_KEY } from "@/constants"
import { storeToken } from "@/lib/storeToken"
import { handleError } from "@/lib/utils/error"
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
