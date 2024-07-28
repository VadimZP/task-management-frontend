"use client";

import { useFormState } from "react-dom";

import { signIn } from "@/app/actions/signIn";
import { SubmitButton } from "../_components/SubmitButton";
import { Input } from "@/app/global-components/Input/Input";
import { Spacing } from "@/app/global-components/Input/Spacing";

export default function SignInPage() {
  const [state, formAction] = useFormState(signIn, {
    email: null,
    password: null,
  });

  const isError = state.errorMessage ?? JSON.stringify(state.errors);

  return (
    <div className="flex h-full bg-slate-50">
      <form
        action={formAction}
        className="m-auto flex w-[400px] max-w-[400px] flex-col rounded-md border border-blue-100 bg-white p-4 shadow-sm"
      >
        <div className="flex flex-col gap-y-6">
          <Input label="Email" name="email" type="email" id="email" required />
          <Input
            label="Password"
            name="password"
            type="password"
            id="password"
          />
        </div>

        <Spacing />

        <div
          className="spacing rounded-md bg-red-100 p-1 px-2 text-sm tracking-tight text-red-700"
          style={isError ? { visibility: "visible" } : { visibility: "hidden" }}
          role="alert"
        >
          <span className="block sm:inline">{isError ? isError : "Error"}</span>
        </div>

        <Spacing />

        <SubmitButton title="Sign in" />
      </form>
    </div>
  );
}
