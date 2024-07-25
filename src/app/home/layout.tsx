import { cookies } from "next/headers";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const cookieStore = cookies()
  const userNickname = cookieStore.get('nickname')?.value;

  return (
    <section className=" h-full bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <nav className="h-[54px] flex relative justify-between shadow bg-white p-4 items-center">
        <h1>Navigation</h1>

        <p>{userNickname}</p>

        <div className="block absolute left-0 bottom-0 bg-black w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      </nav>

      {children}
    </section>
  );
}
