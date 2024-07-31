import { Suspense } from "react";
import { Projects } from "./_components/Projects";
import Loading from "./loading";
import { Modal } from "@/app/global-components";

export default async function HomePage() {
  return (
    <div className="p-8">
      <Modal />
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
    </div>
  );
}
