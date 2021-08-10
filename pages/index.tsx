import Head from "next/head";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex min-h-screen antialiased dark:bg-coolGray-900 bg-coolGray-50 transition-all ease-in-out duration-75">
      <Head>
        <title>Alexander González</title>
      </Head>

      <main className="flex flex-col items-center flex-1">
        <section className="flex justify-end w-full pt-4 pr-6">
          <ThemeToggle />
        </section>

        <section className="relative flex justify-center w-full h-full px-16 text-gray-800 sm:items-center dark:text-coolGray-50">
          <div className="absolute inset-0 flex items-center justify-around">
            <svg
              className="animate-spin-slow w-1/3 text-red-400/50 blur-2xl"
              viewBox="0 0 50 50"
            >
              <circle className="fill-current" cx="25" cy="5" r="7"></circle>
            </svg>
          </div>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
            Hello, <span className="text-rose-500">I'm Alex</span>. I'm a UI
            Developer from Cuba,
            <br />
            currently working at{" "}
            <a href="https://swagup.com" rel="noopener noreferrer">
              Swag Up.
            </a>
          </h1>
        </section>
      </main>
    </div>
  );
}
