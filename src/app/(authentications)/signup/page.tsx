import { LoginForm } from "@/components/modules/authentications/login/login-form";
import { SignupForm } from "@/components/modules/authentications/register/signup-form";

export default function SignIn() {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl text-center font-bold">Sign Up</h1>
      <div className="w-full max-w-2xl">
        <SignupForm />
      </div>
    </div>
  );
}
