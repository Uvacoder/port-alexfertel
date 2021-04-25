import Head from "next/head";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex min-h-screen dark:bg-coolGray-900 bg-gray-100 transition-all ease-in-out duration-75">
      <Head>
        <title>Alexander González</title>
      </Head>

      <main className="flex items-center flex-col flex-1">
        <section className="flex w-full justify-end pt-4 pr-6">
          <ThemeToggle />
        </section>

        <section className="flex items-center pl-16 h-full w-full">
          <h1 className="text-9xl text-gray-800 dark:text-gray-100">
            <span>Hello!</span>
            <br />
            <span>I'm Alex.</span>
          </h1>
        </section>
      </main>
    </div>
  );
}
