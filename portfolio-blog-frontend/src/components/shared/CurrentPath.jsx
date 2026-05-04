"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Typed from "typed.js";
import Icon from "@/components/ui/Icon";

const CurrentPath = () => {
  const pathname = usePathname();

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`${pathname === "/" ? "/home" : pathname}`],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [pathname]);
  return (
    <>
      <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
        <Icon kind={"location"} size={"h-5 w-5"} /> <span ref={el} />
        <span ref={el} />
      </div>
    </>
  );
};

export default CurrentPath;
