"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import cookie from "cookie";

interface FormState {
  email: string | null;
  password: string | null;
  errors?: {
    email?: string[] | undefined;
    password?: string[] | undefined;
  };
  errorMessage?: string;
}

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signIn = async (
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const email = formData.get("email");
  const password = formData.get("password");

  const validatedFields = signInSchema.safeParse({
    email,
    password,
  });

  const fields = {
    email: email?.toString() ?? null,
    password: password?.toString() ?? null,
  };

  if (!validatedFields.success) {
    return {
      ...fields,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const response = await fetch("http://localhost:8000/sign-in", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(fields),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const cookiesList = response.headers.get("Set-Cookie");

    if (cookiesList === null || cookiesList === undefined) {
      throw new Error("Something went wrong with cookies");
    }

    const cookieSessionName = "1connect.sid";
    const cookieSessionValue = cookie.parse(cookiesList)[cookieSessionName];
    console.log("🚀 ~ cookieSessionValue:", cookieSessionValue);

    if (!cookieSessionValue) {
      throw new Error("Something went wrong with session");
    }

    const cookieSessionPath = cookie.parse(cookiesList).Path;
    const cookieSessionExpiration = cookie.parse(cookiesList).Expires;

    cookies().set({
      name: cookieSessionName,
      value: cookieSessionValue,
      path: cookieSessionPath,
      expires: new Date(cookieSessionExpiration),
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        ...fields,
        errorMessage: error.message,
      };
    }
    return {
      ...fields,
      errorMessage: `Something went wrong during sign in ${error}`,
    };
  }

  redirect("/home");
};
