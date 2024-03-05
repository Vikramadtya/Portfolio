"use client";

import * as React from "react";

import SunIcon from "../../../public/owl.svg";
import MoonIcon from "../../../public/sun.svg";

import { useTheme } from "next-themes";
import useSound from "use-sound";

// Another icon that we can use for the theme toggle switch is
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [ThemeSound] = useSound("/sounds/switch-on.mp3");

  return (
    <>
      <button
        type="button"
        onClick={() => {
          ThemeSound();
          setTheme(theme === "light" ? "dark" : "light");
        }}
        className="inline-flex items-center rounded-full border border-blue-700 p-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-700 hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500  dark:hover:text-white"
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

        <span className="sr-only">Icon description</span>
      </button>
    </>
  );
};
export default ThemeToggle;
