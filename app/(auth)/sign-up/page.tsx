import { RegistrationForm } from "@/shared/components/modules"
import AuthPage from "@/shared/components/templates/AuthPage/AuthPage"

const SingUpPage = () => {
  return (
    <AuthPage
      pageName="Sing Up"
      pageNameDescription="Are you looking for a great gift for a friend, family member or yourself? Have a look on our website to find the perfect book for you!"
    >
      <RegistrationForm />
    </AuthPage>
  )
}

export default SingUpPage
