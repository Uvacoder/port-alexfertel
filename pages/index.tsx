import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import Head from "next/head";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDarkTheme = theme === "dark";

  return (
    <div className="flex min-h-screen dark:bg-coolGray-900 bg-gray-100 transition-all ease-in-out duration-75">
      <Head>
        <title>Alexander González</title>
      </Head>

      <main className="flex items-center flex-col flex-1">
        <section className="flex w-full justify-end pt-2 pr-2">
          <Switch
            checked={isDarkTheme}
            onChange={() => setTheme(isDarkTheme ? "light" : "dark")}
            className="dark:text-yellow-400 text-gray-800
            h-6 w-6 focus:outline-none focus-visible:outline-none rounded-full focus-visible:ring-2 
            dark:focus-visible:ring-yellow-400 focus-visible:ring-gray-800"
          >
            <span className="sr-only">Toggle theme</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {isDarkTheme ? (
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              ) : (
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              )}
            </svg>
          </Switch>
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
