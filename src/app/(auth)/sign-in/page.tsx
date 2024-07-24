"use client";

import { useFormState } from "react-dom";
import { signIn } from "@/app/actions/signIn";
import { SubmitButton } from "../_components/SubmitButton";
import { Input } from "@/app/global-components/Input/Input";

export default function SignInPage() {
  const [state, formAction] = useFormState(signIn, {
    email: null,
    password: null,
  });

  return (
    <div className="bg-slate-50 h-full flex">
      <form
        action={formAction}
        className="m-auto flex flex-col gap-y-4 max-w-[400px] w-[400px] rounded-md bg-white shadow-sm p-4 border-blue-100 border"
      >
        <Input label="Email" name="email" type="email" id="email" required />
        <Input label="Password" name="password" type="password" id="password" />

        <SubmitButton title="Sign In" />
      </form>
    </div>
  );
}
