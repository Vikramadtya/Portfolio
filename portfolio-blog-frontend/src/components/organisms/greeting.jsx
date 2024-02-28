"use client";

import React from "react";
import Typed from "typed.js";
import Icon from "@/components/atom/icon";
import Link from "next/link";

const Greetings = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  // const typed = (React.useRef < Typed) | (null > null);

  React.useEffect(() => {
    const options = {
      strings: [
        '"VIKI" is the abbreviation I use on social media',
        "I was born in 1999.",
        "I was raised in Delhi, India.",
        "I like 🏊‍♂️ / 🏃 / 🏸.",
        "I like ナルト.",
        'I like "The Last of Us" 🎮.',
        "I like Indie music 🎵.",
        "...",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    const typed = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <div className="lg:mb-10 lg:mt-10">
      <h1 className="bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text text-7xl font-extrabold text-transparent dark:to-blue-500 py-1">
        Hey there, welcome !
      </h1>
      <br />
      <div className="prose dark:prose-dark lg:prose-lg">
        <p className="text-left rtl:text-right">
          I’m <b>Vikramaditya Singh</b> <Icon kind="partyingFace" />
          {"  , "}
          <span style={{ whiteSpace: "pre" }} ref={el} />
        </p>
        <br />
        <p className="text-left rtl:text-right">
          It&apos;s awesome to have you here. I&apos;m a software engineer with
          three years of experience under my belt, and I&apos;m excited to share
          some of the cool stuff I&apos;ve been working on.
        </p>

        <br />

        <p className="text-left rtl:text-right">
          So kick back, take a look around, and get to know a bit about what
          makes me tick as a developer. Feel free to{" "}
          <Link href="/about"> get to know me better.</Link>
        </p>

        <br />
        <p className="text-left rtl:text-right">Thanks for dropping by!</p>
      </div>
    </div>
  );
};

export default Greetings;
