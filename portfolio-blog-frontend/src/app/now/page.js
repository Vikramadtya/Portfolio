"use client";
import React, { useEffect, useState } from "react";
import Icon from "@/components/atom/icon";
import dynamic from "next/dynamic";
import Sign from "../../../public/assets/icons/sign.png";
import "react-clock/dist/Clock.css";
import GenericCard from "@/components/atom/genericCard";
import WeatherCard from "@/components/atom/weatherCard";
import Image from "next/image";

const items = [
  {
    heading: "Watching",
    icon: "tv",
    content:
      "I'm currently watching 'YellowStone' and absolutely hooked on its storyline!",
  },
  {
    heading: "Reading",
    icon: "bookmark",
    content:
      "I'm currently reading [book name] and finding it incredibly insightful and engaging!",
  },
  {
    heading: "Drinking",
    icon: "hotDrink",
    content:
      "I'm not addicted to coffee, we’re just in a committed relationship, and I’m fully loyal!",
  },
  {
    heading: "Listening",
    icon: "spotify",
    content:
      "My favorite soundtrack is 'Nachna' by Babbulicious and ZZORAWAR it's like the perfect vibe for conquering Monday mornings and life’s chaos!",
  },
];

const Clock = dynamic(() => import("react-clock"), { ssr: false });

export default function Home() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="px-12 pb-10 pt-32 md:px-24 lg:px-32 xl:px-48 2xl:px-80">
      <div className="flex flex-col items-center justify-between gap-10">
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          <Card
            heading={"Time at my place"}
            subHeading={"Card subtitle"}
            content={
              <Clock
                value={value}
                className="mt-2 text-gray-500 dark:text-gray-100"
              />
            }
          />
          <Card
            heading={"Weather at my place"}
            subHeading={"Card subtitle"}
            content={<WeatherCard />}
          />
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {items.map((item, index) => (
            <div key={index}>
              <GenericCard
                icon={
                  <Icon
                    kind={item.icon}
                    size="inline-block size-[62px] rounded-lg"
                  />
                }
                content={item.content}
                heading={item.heading}
              />
            </div>
          ))}
        </div>
        <div className="relative flex w-full items-center py-5">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="mx-4 flex-shrink text-gray-400">~~~~~</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <p className="mt-1 text-base font-medium  text-gray-500 dark:text-gray-500">
          Right now, I&apos;m juggling between work, a strong cup of coffee, and
          some good music, trying to stay productive and beat the day’s to-do
          list one task at a time !
        </p>
        <ul className="mb-20 w-full list-disc space-y-2 ps-5 text-base text-gray-600 marker:text-blue-600 dark:text-gray-100">
          <li>FAQ</li>
          <li>License</li>
          <li>Terms & Conditions</li>
        </ul>
        <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-green-600  p-4 shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:text-gray-100 md:p-5 ">
          <Image
            className="inline-block size-[62px] rounded-lg"
            src={Sign}
            alt="Image Description"
          />
        </div>
      </div>
    </main>
  );
}

const Card = ({ heading, subHeading, content }) => {
  return (
    <>
      <div className="flex flex-col rounded-xl border bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7] md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {heading}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
          {subHeading}
        </p>
        <div className="flex h-full items-center justify-center align-middle">
          {content}
        </div>
      </div>
    </>
  );
};
