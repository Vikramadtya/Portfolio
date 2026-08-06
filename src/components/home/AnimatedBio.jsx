import React from "react";
import Icon from "@/components/ui/Icon";
import siteMetadata from "@/lib/metadata";
import bioData from "@/../_content/components/animatedBio.json";

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    let isCancelled = false;

    import("typed.js").then((TypedModule) => {
      if (isCancelled) return;
      typed.current = new TypedModule.default(el.current, {
        stringsElement: "#bios",
        typeSpeed: 40,
        backSpeed: 10,
        loop: true,
        backDelay: 1000,
      });
    });

    return () => {
      isCancelled = true;
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <ul id="bios" className="hidden">
        <li>
          <b className="font-medium">&quot;{siteMetadata.headerTitle}&quot;</b> {bioData.abbreviationText}
        </li>
        <li>
          {bioData.birthYearText} <b className="font-medium">{bioData.birthYear}</b>.
        </li>
        <li>
          <p className="flex items-center ">
            <span className="pr-1">
              {bioData.locationPrefix}
              <strong className="font-medium"> {bioData.locationName}</strong>
            </span>
            <Icon kind={bioData.locationIcon} size={"h-8 w-8"} />.
          </p>
        </li>
        <li className="flex items-center">
          <p className="flex items-center ">
            {bioData.hobbiesPrefix}{" "}
            {bioData.hobbies.map((hobby, index) => (
              <React.Fragment key={hobby}>
                <span className="pl-1 pr-1">
                  <Icon kind={hobby} size={"h-6 w-6"} />
                </span>
                {index < bioData.hobbies.length - 1 ? " / " : ""}
              </React.Fragment>
            ))}
            {" ."}
          </p>
        </li>
        <li>
          {bioData.animeText} <b className="font-medium"> {bioData.animeName}</b>.
        </li>
        <li>
          <p className="flex items-center ">
            {bioData.gamePrefix}{" "}
            <span className="pl-1 pr-1">
              <Icon kind={bioData.gameIcon} size={"h-6 w-6"} />
            </span>
            ️.
          </p>
        </li>
        <li>
          <p className="flex items-center ">
            {bioData.musicText}{" "}
            <span className="pl-1 pr-1">
              <Icon kind={bioData.musicIcon} size={"h-8 w-8"} />
            </span>{" "}
            {bioData.musicSuffix}
          </p>
        </li>
      </ul>
      <div className="flex items-center text-left rtl:text-right">
        <p className="flex flex-col md:flex-row md:items-center">
          <span className="flex items-center">
            {bioData.typingPrefix} <b className="pl-2 pr-2">{siteMetadata.author}</b>{" "}
            <Icon kind={bioData.typingIcon} size={"h-8 w-8"} />
            {","}
          </span>
          <span ref={el} className="text-gray-600 dark:text-gray-100 md:pl-2" />
        </p>{" "}
      </div>
    </>
  );
};

export default TypedBios;
