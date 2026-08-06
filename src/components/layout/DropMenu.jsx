"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import MenuOpen from "@/public/assets/icons/menu-open.svg";
import MenuClose from "@/public/assets/icons/menu-close.svg";
import * as React from "react";
import useSound from "use-sound";
import { useState } from "react";
import { dropDownMenuNavLinks } from "@/lib/navigationData";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

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
          <DropdownMenuTrigger
            aria-label="Open navigation menu"
            className="inline-flex items-center rounded-full border border-primary p-2.5 text-center text-sm font-medium text-primary hover:bg-primary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white"
          >
            <MenuOpen
              className={`h-[1.2rem]  w-[1.2rem] rotate-0 scale-100 transition-all ${menuOpen ? "" : "-rotate-90 scale-0"} `}
            />
            <MenuClose
              className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${menuOpen ? "rotate-0 scale-100" : ""}`}
            />

            <span className="sr-only">Open navigation menu</span>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="mr-2 ">
            {dropDownMenuNavLinks.map((menuItem) => {
              if (menuItem.title === "")
                return <DropdownMenuSeparator key={menuItem.key} />;
              return (
                <DropdownMenuItem key={menuItem.key}>
                  <Link href={menuItem.href}>
                    <div className="flex w-56 items-center justify-between">
                      <div>
                        <Icon kind={menuItem.icon} size="h-4 w-4" />
                        <span className="pl-2 pr-2 ">{menuItem.title}</span>
                      </div>
                      <div>
                        <DropdownMenuShortcut>
                          {menuItem.shortcut}
                        </DropdownMenuShortcut>
                      </div>
                    </div>
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
