import { LoginForm } from "@/components/modules/authentications/login/login-form";
import React from "react";

export default function SignIn() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold">SignIn</h1>
      <div className="max-w-2xl mx-auto my-4">
        <LoginForm />
      </div>
    </div>
  );
}
