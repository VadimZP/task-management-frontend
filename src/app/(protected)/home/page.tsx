import { Suspense } from "react";
import { Projects } from "./_components/Projects";
import Loading from "./loading";

export default async function HomePage() {
  return (
    <div className="p-8">
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
    </div>
  );
}
