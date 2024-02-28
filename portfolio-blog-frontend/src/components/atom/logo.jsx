import Image from "next/image";
import React from "react";

import LogoLight from "../../../public/logo.png?url";
import LogoDark from "../../../public/logo-dark.png?url";

const Logo = ({ size }) => {
  return (
    <>
      <Image
        className="rounded-md rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        src={LogoLight}
        alt="logo"
        width={size}
        height={size}
      />
      <Image
        className="rounded-md absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        src={LogoDark}
        alt="logo"
        width={size}
        height={size}
      />
    </>
  );
};

export default Logo;
