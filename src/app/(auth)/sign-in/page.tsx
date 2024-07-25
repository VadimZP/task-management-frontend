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
    <div className="bg-slate-50 h-full flex">
      <form
        action={formAction}
        className="m-auto flex flex-col max-w-[400px] w-[400px] rounded-md bg-white shadow-sm p-4 border-blue-100 border"
      >
        <div className="gap-y-6 flex flex-col">
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
          className="bg-red-100 text-red-700 p-1 px-2 rounded-md text-sm spacing tracking-tight"
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
