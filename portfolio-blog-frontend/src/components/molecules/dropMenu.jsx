"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/atom/dropdown-menu";
import MenuOpen from "../../../public/menu-open.svg";
import MenuClose from "../../../public/menu-close.svg";
import * as React from "react";
import useSound from "use-sound";
import { useState } from "react";
import { dropDownMenuNavLinks } from "../../lib/navLinks";
import Link from "next/link";
import Icon from "@/components/atom/icon";

const DropMenu = () => {
  const [ThemeSound] = useSound("/sounds/switch-on.mp3");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="pl-2 pr-2">
        <DropdownMenu
          onOpenChange={() => {
            ThemeSound();
            setMenuOpen(!menuOpen);
          }}
        >
          <DropdownMenuTrigger className="inline-flex items-center rounded-full border border-blue-700 p-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-700 hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500  dark:hover:text-white">
            <MenuOpen
              className={`h-[1.2rem]  w-[1.2rem] rotate-0 scale-100 transition-all ${menuOpen ? "" : "-rotate-90 scale-0"} `}
            />
            <MenuClose
              className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${menuOpen ? "rotate-0 scale-100" : ""}`}
            />

            <span className="sr-only">Icon description</span>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            {dropDownMenuNavLinks.map((menuItem) => {
              return (
                <DropdownMenuItem key={menuItem.title}>
                  <Link
                    href={menuItem.href}
                    className="flex items-center justify-center"
                  >
                    <Icon kind={menuItem.icon} size="h-4 w-4" />
                    <span className="pl-2 pr-2">{menuItem.title}</span>
                    <DropdownMenuShortcut>⌘+B</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default DropMenu;
