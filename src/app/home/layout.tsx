import { cookies } from "next/headers";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const userNickname = cookieStore.get("nickname")?.value;

  return (
    <section className="h-full bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <nav className="relative flex h-[34px] items-center justify-between bg-white p-4 shadow">
        <h1>Navigation</h1>

        <p>{userNickname}</p>

        <div className="absolute bottom-0 left-0 block h-0.5 w-full bg-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      </nav>

      {children}
    </section>
  );
}
