"use client";

import dynamic from "next/dynamic";
import Icon from "@/components/ui/Icon";
import { useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Lazy-load heavy animation libraries — they are visual polish,     */
/*  not critical for first paint. This keeps them out of the initial   */
/*  JS bundle entirely.                                                */
/* ------------------------------------------------------------------ */
const Snowfall = dynamic(
  () => import("react-snowfall").then((mod) => mod.Snowfall),
  { ssr: false },
);
const AnimatedBio = dynamic(
  () => import("@/components/home/AnimatedBio"),
  { ssr: false },
);
const RoughNotation = dynamic(
  () => import("react-rough-notation").then((mod) => mod.RoughNotation),
  { ssr: false },
);

const HeroSection = ({ data }) => {
  /* Reduce particle count on mobile to save GPU cycles */
  const [snowflakeCount, setSnowflakeCount] = useState(20);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setSnowflakeCount(mq.matches ? 60 : 20);

    const handler = (e) => setSnowflakeCount(e.matches ? 60 : 20);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <Snowfall
        snowflakeCount={snowflakeCount}
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />
      <div className="lg:mb-10 lg:mt-10">
        <h1 className="hero-title-text">
          <span className="wavy pr-2">
            {" "}
            <Icon kind="hand" size={"h-28 w-28 md:h-52 md:w-52"} />
          </span>
          {data.greetingTitle}
        </h1>
        <br />
        <div>
          <AnimatedBio />
          <br />
          <p className="text-left rtl:text-right">
            {data.greetingPrefix}{" "}
            <RoughNotation
              type="underline"
              show={true}
              animate={true}
              color="#f1c40f"
              animationDelay={1000}
              animationDuration={2500}
            >
              {data.greetingHighlight}
            </RoughNotation>
            {data.greetingSuffix}
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
