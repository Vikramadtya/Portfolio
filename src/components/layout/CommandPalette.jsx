"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import useSound from "use-sound";
import Command from "@/public/assets/icons/command.svg";
import * as React from "react";

// Lazily load the heavy headless UI modal only when it is opened.
const CommandModal = dynamic(() => import("./CommandModal"), {
  ssr: false, // Optional: disables server-side rendering for this heavy chunk
});

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [ThemeSound] = useSound("/sounds/switch-on.mp3");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="inline-flex items-center rounded-full border border-blue-700 p-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-700 hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white"
        type="button"
        aria-label="Command palette"
        onClick={() => {
          toggleIcon();
          ThemeSound();
        }}
      >
        <Command
          className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all`}
        />
      </button>

      {/* The modal is only downloaded and rendered when isOpen becomes true */}
      {isOpen && <CommandModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
