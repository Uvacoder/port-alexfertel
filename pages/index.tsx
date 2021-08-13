import Head from "next/head";
import BouncingArrow from "../components/BouncingArrow";
import Navigation from "../components/Navigation";
import { Transition } from "@headlessui/react";

const Home = () => (
  <div className="flex flex-col flex-1">
    <Head>
      <title>Alexander González - UI Developer, Generative Artist.</title>
    </Head>
    <div className="flex min-h-screen transition-colors duration-75">
      <div className="relative flex flex-col items-center flex-1 text-gray-700 dark:text-coolGray-100">
        <Navigation />

        <main className="relative flex justify-center w-full h-full px-16 sm:items-center">
          <Transition
            appear
            show
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <h1 className="text-xl font-pacifico sm:text-2xl md:text-3xl lg:text-5xl">
              Hello, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-blue-500">
                Alex
              </span>
              .
              <br />
              Welcome to my personal corner of the web.
            </h1>
          </Transition>
        </main>

        <section className="absolute bottom-0 left-0 right-0 flex justify-center items-center pb-4">
          <Transition
            appear
            show
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <BouncingArrow />
          </Transition>
        </section>
      </div>
    </div>
    <div className="flex min-h-screen transition-colors duration-75">
      <h2>Personal Changelog</h2>
    </div>
  </div>
);

export default Home;
