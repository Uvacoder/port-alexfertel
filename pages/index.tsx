import * as React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navigation from "../components/global/Navigation";
import Link from "next/link";
import { ArrowDownIcon } from "../components/icons";
import AnimatedText from "../components/global/AnimatedText";
import BackToTop from "../components/global/BackToTop";

const Home = () => {
  return (
    <div className="flex flex-col flex-1">
      <Head>
        <title>Alexander González - UI Developer, Generative Artist.</title>
      </Head>

      <section
        id="first-section"
        className="flex min-h-screen transition-colors duration-75"
      >
        <div className="relative flex flex-col items-center flex-1 text-gray-700 dark:text-coolGray-100">
          <Navigation />
          <BackToTop />

          <main className="relative flex justify-center w-full h-full px-4 sm:px-16 items-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delay: 0.5, staggerChildren: 0.085 },
                },
              }}
              className="text-xl font-lora sm:text-2xl md:text-3xl lg:text-5xl"
            >
              <AnimatedText text="Hello, I'm" />{" "}
              <motion.span
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-amber-500"
              >
                Alex
              </motion.span>
              <AnimatedText text="." />
              <br />
              <AnimatedText text="Welcome to my personal corner of the web." />
            </motion.h1>
          </main>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center pb-4">
            <Link href="/#second-section">
              <a>
                <ArrowDownIcon className="h-6 w-6 animate-bounce" />
              </a>
            </Link>
          </div>
        </div>
      </section>
      {/*
            <section
            id="second-section"
            className="flex min-h-screen transition-colors duration-75"
            >
            <h2>Personal Changelog</h2>
            </section>
        */}
    </div>
  );
};

export default Home;
