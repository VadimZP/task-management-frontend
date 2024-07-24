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
      className="rounded-md bg-blue-700 border-none w-fit m-auto text-white p-2 hover:bg-blue-800"
    >
      {title}
    </button>
  );
}
