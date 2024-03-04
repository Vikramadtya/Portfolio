"use client";

import { Snowfall } from "react-snowfall";
import TypedBios from "@/components/atom/typedBios";
import Icon from "@/components/atom/icon";

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
        <h1 className="flex items-center bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text py-1 text-7xl font-extrabold text-transparent dark:to-blue-500">
          <span className="wavy pr-2">
            {" "}
            <Icon kind="hand" size={200} />
          </span>
          Hey there, welcome !
        </h1>
        <br />
        <div className="prose dark:prose-dark lg:prose-lg">
          <TypedBios />
          <br />
          <p className="text-left rtl:text-right">
            It&apos;s awesome to have you here. I&apos;m a software engineer
            with three years of experience under my belt, and I&apos;m excited
            to share some of the cool stuff I&apos;ve been working on.
          </p>

          <br />
        </div>
      </div>
    </>
  );
};

export default Greetings;
