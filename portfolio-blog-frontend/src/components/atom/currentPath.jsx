"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Typed from "typed.js";

const CurrentPath = () => {
  const pathname = usePathname();

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`~${pathname}`],
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
        <span ref={el} />
      </div>
    </>
  );
};

export default CurrentPath;
