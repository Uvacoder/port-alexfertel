import * as React from "react";
import Head from "next/head";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import BouncingArrow from "../components/global/BouncingArrow";
import Navigation from "../components/global/Navigation";
import Link from "next/link";

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  console.log(scrollYProgress);

  return (
    <div className="flex flex-col flex-1">
      <Head>
        <title>Alexander González - UI Developer, Generative Artist.</title>
      </Head>

      <motion.div
        className="fixed bottom-2 right-2 bg-black w-4 h-4"
        style={{ scale }}
      >
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
        />
      </motion.div>
      <section
        id="first-section"
        className="flex min-h-screen transition-colors duration-75"
      >
        <div className="relative flex flex-col items-center flex-1 text-gray-700 dark:text-coolGray-100">
          <Navigation />

          <main className="relative flex justify-center w-full h-full px-4 sm:px-16 items-center">
            <h1 className="text-xl font-pacifico sm:text-2xl md:text-3xl lg:text-5xl">
              Hello, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-blue-500">
                Alex
              </span>
              .
              <br />
              Welcome to my personal corner of the web.
            </h1>
          </main>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center pb-4">
            <Link href="/#second-section">
              <a>
                <BouncingArrow />
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="second-section"
        className="flex min-h-screen transition-colors duration-75"
      >
        <h2>Personal Changelog</h2>
      </section>
    </div>
  );
};

export default Home;
