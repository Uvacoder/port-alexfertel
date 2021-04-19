import { useReducer } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import Head from "next/head";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Alexander González</title>
      </Head>

      <main className="flex items-center justify-between flex-1 px-20">
        <section className="flex flex-col justify-center">
          <h1 className="text-9xl text-gray-800 dark:text-gray-100">
            <span>Hello!</span>
            <br />
            <span>I'm Alex.</span>
          </h1>
        </section>
        <section>
          <Switch
            checked={isDarkTheme}
            onChange={() => setTheme(isDarkTheme ? "light" : "dark")}
            className={`${
              isDarkTheme ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className="sr-only">Toggle theme</span>
            <span
              className={`${
                isDarkTheme ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
        </section>
      </main>
    </div>
  );
}
