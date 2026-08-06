"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Icon from "@/components/ui/Icon";

export default function CurrentPath() {
  const currentPath = usePathname();
  const el = React.useRef(null);

  React.useEffect(() => {
    let typed = null;
    let isCancelled = false;

    import("typed.js").then((TypedModule) => {
      if (isCancelled) return;
      typed = new TypedModule.default(el.current, {
        strings: [
          `~${currentPath === "/" ? "/home" : currentPath}`,
        ],
        typeSpeed: 60,
      });
    });

    return () => {
      isCancelled = true;
      if (typed) {
        typed.destroy();
      }
    };
  }, [currentPath]);

  return (
    <>
      <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
        <Icon kind={"location"} size={"h-5 w-5"} /> <span ref={el} />
      </div>
    </>
  );
}
