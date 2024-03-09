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
          <p className="flex items-center ">
            <span className="pr-1">
              I was raised in
              <strong className="font-medium"> Delhi, India</strong>
            </span>
            <Icon kind="india" size={"h-8 w-8"} />.
          </p>
        </li>
        <li className="flex items-center">
          <p className="flex items-center ">
            I like{" "}
            <span className="pl-1 pr-1">
              <Icon kind="swimming" size={"h-8 w-8"} />
            </span>{" "}
            /{" "}
            <span className="pl-1 pr-1">
              <Icon kind="running" size={"h-8 w-8"} />
            </span>{" "}
            /{" "}
            <span className="pl-1 pr-1">
              <Icon kind="gym" size={"h-8 w-8"} />
            </span>{" "}
            .
          </p>
        </li>
        <li>
          I like <b className="font-medium"> ナルト</b>.
        </li>
        <li>
          <p className="flex items-center ">
            I like &quot;The Last of Us&quot;{" "}
            <span className="pl-1 pr-1">
              <Icon kind="game" size={"h-8 w-8"} />
            </span>
            ️.
          </p>
        </li>
        <li>
          <p className="flex items-center ">
            I love listening{" "}
            <span className="pl-1 pr-1">
              <Icon kind="music" size={"h-8 w-8"} />
            </span>{" "}
            and rap music.
          </p>
        </li>
      </ul>
      <div className="flex items-center text-left rtl:text-right">
        <p className="flex flex-col md:flex-row md:items-center">
          <span className="flex items-center">
            I’m <b className="pl-2 pr-2">Vikramaditya Singh</b>{" "}
            <Icon kind="partyingFace" size={"h-8 w-8"} />
            {","}
          </span>
          <span ref={el} className="text-gray-600 dark:text-gray-400 md:pl-2" />
        </p>{" "}
      </div>
    </>
  );
};

export default TypedBios;
