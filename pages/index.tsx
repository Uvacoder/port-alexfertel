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
          <div className="absolute inset-0 flex items-center justify-around">
            <svg
              className="w-80 text-rose-500 dark:text-blueGray-500 blur-2xl"
              viewBox="0 0 50 50"
            >
              <circle className="fill-current" cx="12.5" cy="12.5" r="5">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 25 25"
                  to="0 25 25"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
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
