"use client";

import { useState } from "react";
import { Button, Input } from "@/app/global-components";
import { useFormState } from "react-dom";
import { createProject } from "@/app/actions/createProject";

export function Modal() {
  const [state, formAction] = useFormState(createProject, {
    title: null,
    description: null,
  });

  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!isOpen);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const isError = state.errorMessage ?? JSON.stringify(state.errors);

  return (
    <>
      <Button title="Create new project" onClick={toggleModal} />
      <div
        id="default-modal"
        tabIndex={-1}
        className={`fixed left-0 right-0 top-0 z-50 ${!isOpen && "hidden"} h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0`}
      >
        <div className="relative max-h-full w-full max-w-2xl p-4">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Type information about your new project
              </h3>
              <button
                onClick={closeModal}
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
              >
                <svg
                  className="h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>

                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="space-y-4 p-4 md:p-5">
              <form action={formAction}>
                <Input id="title" name="title" label="Title" type="text" />
                <Input
                  id="description"
                  name="description"
                  label="Description"
                  type="text"
                />

                <div
                  className="spacing rounded-md bg-red-100 p-1 px-2 text-sm tracking-tight text-red-700"
                  style={
                    isError
                      ? { visibility: "visible" }
                      : { visibility: "hidden" }
                  }
                  role="alert"
                >
                  <span className="block sm:inline">
                    {isError ? isError : "Error"}
                  </span>
                </div>
                <Button title="Accept" type="submit" />
                <Button
                  title="Cancel"
                  hierarchy="secondary"
                  onClick={closeModal}
                />
              </form>
            </div>
            {/* <!-- Modal footer --> */}
            {/* <div className="flex items-center rounded-b border-t border-gray-200 p-4 md:p-5">
            
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
