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
      className="text-md m-auto w-fit rounded-md border-2 border-solid border-blue-200 bg-blue-700 p-2 px-4 font-bold text-white shadow transition-all hover:bg-blue-800"
    >
      {title}
    </button>
  );
}
