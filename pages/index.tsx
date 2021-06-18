import Head from "next/head";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex antialiased min-h-screen dark:bg-coolGray-900 bg-coolGray-50 transition-all ease-in-out duration-75">
      <Head>
        <title>Alexander González</title>
      </Head>

      <main className="flex items-center flex-col flex-1">
        <section className="flex w-full justify-end pt-4 pr-6">
          <ThemeToggle />
        </section>

        <section className="flex justify-center sm:items-center px-16 h-full w-full text-gray-800 dark:text-coolGray-50">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
            <span>
              Hello, <span className="text-rose-500">I'm Alex</span>. I'm a UI
              Developer from Cuba,
            </span>
            <br />
            <span>
              currently working at{" "}
              <a href="https://swagup.com" rel="noopener noreferrer">
                Swag Up
              </a>
            </span>
          </h1>
        </section>
      </main>
    </div>
  );
}
