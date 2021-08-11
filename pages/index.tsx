import Head from "next/head";
import BouncingArrow from "../components/BouncingArrow";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => (
  <div className="flex min-h-screen antialiased dark:bg-coolGray-900 bg-coolGray-50 transition-colors duration-75">
    <Head>
      <title>Alexander González</title>
    </Head>

    <main className="relative flex flex-col items-center flex-1 text-gray-700 dark:text-coolGray-100">
      <section className="absolute top-0 right-0 -translate-x-2 z-10 translate-y-2">
        <ThemeToggle />
      </section>

      <section className="relative flex justify-center w-full h-full px-16 sm:items-center">
        <h1 className="relative z-10 text-xl font-pacifico sm:text-xl md:text-2xl lg:text-4xl">
          Hello, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-blue-600">
            Alex
          </span>
          .
          <br />
          Welcome to my personal corner of the web.
        </h1>
      </section>

      <section className="absolute bottom-0 left-0 right-0 flex justify-center items-center pb-4">
        <BouncingArrow />
      </section>
    </main>
  </div>
);

export default Home;
