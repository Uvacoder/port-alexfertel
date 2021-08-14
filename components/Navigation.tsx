import * as React from "react";
import ThemeToggle from "../components/ThemeToggle";
import Link from "next/link";
import clsx from "clsx";

const HomeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const OpenSource = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M12 2c5.523 0 10 4.477 10 10 0 4.4-2.841 8.136-6.789 9.473l-.226.074-2.904-7.55C13.15 13.95 14 13.054 14 12c0-1.105-.895-2-2-2s-2 .895-2 2c0 1.077.851 1.955 1.917 1.998l-2.903 7.549-.225-.074C4.84 20.136 2 16.4 2 12 2 6.477 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8 0 2.92 1.564 5.475 3.901 6.872l1.48-3.849C8.534 14.29 8 13.207 8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.207-.535 2.29-1.38 3.023.565 1.474 1.059 2.757 1.479 3.85C18.435 17.475 20 14.92 20 12c0-4.418-3.582-8-8-8z" />
  </svg>
);

const NavigationIcon = ({ children, href }) => (
  <Link href={href}>
    <a className={"transition-all hover:scale-110 duration-100 ease-out"}>
      {children}
    </a>
  </Link>
);

const Navigation = () => {
  return (
    <div className="z-10 absolute px-4 pt-4 top-0 left-0 right-0 flex justify-between">
      <div className="flex items-center justify-between w-14">
        <NavigationIcon href="/">
          <HomeIcon className="h-5 w-5 text-red-500 dark:text-coolGray-100" />
        </NavigationIcon>
        <NavigationIcon href="/open-source">
          <OpenSource className="h-5 w-5 text-red-500 dark:text-coolGray-100" />
        </NavigationIcon>
      </div>

      <ThemeToggle />
    </div>
  );
};

export default Navigation;
