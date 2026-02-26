import { LoginForm } from "@/components/modules/authentications/login/login-form";

export default function SignIn() {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl text-center font-bold">SignUp</h1>
      <div className="w-full max-w-2xl">
        <LoginForm />
      </div>
    </div>
  );
}
