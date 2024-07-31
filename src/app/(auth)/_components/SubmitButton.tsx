"use client";

import { Button } from "@/app/global-components";
import { useFormStatus } from "react-dom";

interface SubmitButton {
  title: string;
}

export function SubmitButton({ title }: SubmitButton) {
  const { pending } = useFormStatus();

  return <Button title={title} type="submit" pending={pending} />;
}
