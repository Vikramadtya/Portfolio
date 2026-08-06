"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();

  // Defines a smooth fade and slight upward slide for every page load
  const variants = {
    hidden: { opacity: 0, y: 15 },
    enter: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      key={pathname}
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.4 }}
      className="flex-grow h-full"
    >
      {children}
    </motion.div>
  );
}
