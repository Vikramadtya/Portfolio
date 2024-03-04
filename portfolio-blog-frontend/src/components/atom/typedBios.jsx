import React from "react";
import Typed from "typed.js";

import Icon from "@/components/atom/icon";

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: "#bios",
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <>
      <ul id="bios" className="hidden">
        <li>
          <b className="font-medium">&quot;VIKI&quot;</b> is the abbreviation I
          use on social media.
        </li>
        <li>
          I was born in <b className="font-medium">1999</b>.
        </li>
        <li>
          I was raised in <b className="font-medium">Delhi, India 🇮🇳</b>.
        </li>
        <li>I like 🏊‍ / 🏃 / 🏸.</li>
        <li>I love web development.</li>
        <li>
          I like
          <b className="font-medium">ナルト</b>.
        </li>
        <li>
          I work mostly with{" "}
          <b className="font-medium">Javascript/Typescript</b> technologies.
        </li>
        <li>I like &quot;The Last of Us&quot; 🎮️.</li>
        <li>I like Indie music 🎶.</li>
        <li>
          I love listening <Icon kind="partyingFace" /> and rap music.
        </li>
      </ul>
      <p className="text-left rtl:text-right">
        I’m <b>Vikramaditya Singh</b> <Icon kind="partyingFace" />
        {"  , "} <span ref={el} className="text-gray-600 dark:text-gray-400" />
      </p>
    </>
  );
};

export default TypedBios;
