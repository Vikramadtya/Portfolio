"use client";

import { Snowfall } from "react-snowfall";
import TypedBios from "@/components/atom/typedBios";
import Icon from "@/components/atom/icon";
import { RoughNotation } from "react-rough-notation";

const Greetings = () => {
  return (
    <>
      <Snowfall
        snowflakeCount={60}
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />
      <div className="lg:mb-10 lg:mt-10">
        <h1 className="animate__heartBeat flex items-center bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text py-1 text-2xl font-extrabold text-transparent dark:to-blue-500 md:text-7xl">
          <span className="wavy pr-2">
            {" "}
            <Icon kind="hand" size={"h-28 w-28 md:h-52 md:w-52"} />
          </span>
          Hey there, welcome !
        </h1>
        <br />
        <div className="">
          <TypedBios />
          <br />
          <p className="text-left rtl:text-right">
            It&apos;s awesome to have you here. I&apos;m a{" "}
            <RoughNotation
              type="highlight"
              show={true}
              animate="true"
              color="#f1c40f"
              animationDelay={1000}
              animationDuration={2500}
            >
              software engineer with three years of experience under my belt
            </RoughNotation>
            , and I&apos;m excited to share some of the cool stuff I&apos;ve
            been working on.
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default Greetings;
