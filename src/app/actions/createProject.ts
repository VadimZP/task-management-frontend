"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

interface FormState {
  title: string | null;
  description: string | null;
  errors?: {
    title?: string[] | undefined;
    description?: string[] | undefined;
  };
  errorMessage?: string;
}

const createProjectSchema = z.object({
  title: z.string().min(3).max(50),
  description: z.string().min(3).max(200).optional(),
  creatorId: z.number(),
});

export const createProject = async (
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const title = formData.get("title");
  const description = formData.get("description");

  const validatedFields = createProjectSchema.safeParse({
    title,
    description,
    creatorId: 2,
  });

  const fields = {
    title: title?.toString() ?? null,
    description: description?.toString() ?? null,
    creatorId: 2,
  };

  if (!validatedFields.success) {
    return {
      ...fields,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  let project;

  const sessionCookie = cookies().get("connect.sid");

  try {
    const response = await fetch("http://localhost:8000/projects", {
      headers: {
        "Content-Type": "application/json",
        Cookie: `${sessionCookie?.name}=${sessionCookie?.value};`,
      },
      method: "POST",
      body: JSON.stringify(fields),
    });

    if (!response.ok && response.status === 401) {
      throw new Error("Incorrect credentials");
    }

    if (!response.ok) {
      throw new Error("Something went wrong during project creation");
    }

    project = await response.json();
  } catch (error) {
    if (error instanceof Error) {
      return {
        ...fields,
        errorMessage: error.message,
      };
    }
    return {
      ...fields,
      errorMessage: `Something went wrong during project creation: ${error}`,
    };
  }

  redirect(`/projects/${project.data.slug}`);
};
