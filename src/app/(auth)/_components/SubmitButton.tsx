"use client";

import { useFormStatus } from "react-dom";

interface SubmitButton {
  title: string;
}

export function SubmitButton({ title }: SubmitButton) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="rounded-md  border bg-blue-700 font-bold w-fit m-auto p-2 px-4 hover:bg-blue-800 text-md text-white transition-all shadow"
    >
      {title}
    </button>
  );
}
