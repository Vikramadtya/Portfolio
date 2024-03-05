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
            <Icon kind="india" size={20} />.
          </p>
        </li>
        <li className="flex items-center">
          <p className="flex items-center ">
            I like{" "}
            <span className="pl-1 pr-1">
              <Icon kind="swimming" size={20} />
            </span>{" "}
            /{" "}
            <span className="pl-1 pr-1">
              <Icon kind="running" size={20} />
            </span>{" "}
            /{" "}
            <span className="pl-1 pr-1">
              <Icon kind="gym" size={20} />
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
              <Icon kind="game" size={20} />
            </span>
            ️.
          </p>
        </li>
        <li>
          <p className="flex items-center ">
            I love listening{" "}
            <span className="pl-1 pr-1">
              <Icon kind="music" size={20} />
            </span>{" "}
            and rap music.
          </p>
        </li>
      </ul>
      <div className="flex items-center text-left rtl:text-right">
        <p className="pr-2">
          I’m <b>Vikramaditya Singh</b>
        </p>{" "}
        <Icon kind="partyingFace" size={20} />
        {"  , "}{" "}
        <span ref={el} className="pl-2 text-gray-600 dark:text-gray-400" />
      </div>
    </>
  );
};

export default TypedBios;
