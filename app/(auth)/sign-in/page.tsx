import Input from "@/components/elements/FormField/Input"
import AuthPage from "@/components/templates/AuthPage/AuthPage"

const SignInPage = () => {
  return (
    <AuthPage
      className="login"
      pageName="Login"
      pageNameDescription="You can buy books with us here. All of them are reliable, cheap and on good quality. The selection is wide, we have almost every book that you could ever wish for. You won't regret ordering from us!"
    >
      <Input />
    </AuthPage>
  )
}

export default SignInPage
