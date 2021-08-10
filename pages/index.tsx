import Head from "next/head";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex min-h-screen antialiased dark:bg-coolGray-900 bg-coolGray-50 transition-all ease-in-out duration-75">
      <Head>
        <title>Alexander González</title>
      </Head>

      <main className="relative flex flex-col items-center flex-1">
        <section className="absolute top-0 right-0 -translate-x-2 z-10 translate-y-2">
          <ThemeToggle />
        </section>

        <section className="relative flex justify-center w-full h-full px-16 text-gray-800 sm:items-center dark:text-coolGray-50">
          <h1 className="z-10 text-lg sm:text-xl md:text-2xl lg:text-4xl">
            Hello,{" "}
            <span className="text-rose-500 dark:text-blue-400">I'm Alex</span>.
            I'm a UI Developer from Cuba,
            <br />
            currently working at{" "}
            <a
              href="https://swagup.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Swag Up.
            </a>
          </h1>
        </section>
      </main>
    </div>
  );
}
