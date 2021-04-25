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

        <section className="flex justify-between sm:items-center px-16 h-full w-full text-gray-800 dark:text-coolGray-50">
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-9xl">
            <span>Hello!</span>
            <br />
            <span>I'm Alex.</span>
          </h1>
          <div className="flex justify-between max-w-sm w-full max-h-56 border border-dashed">
            <div className="h-full w-px bg-gray-100" />
            <p className="sm:text-xl">
              Hehehe The quick brown fox jumps over the lazy dog
            </p>
            <div className="h-full w-px bg-gray-100" />
          </div>
        </section>
      </main>
    </div>
  );
}
