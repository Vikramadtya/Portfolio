"use client";
import React, { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import dynamic from "next/dynamic";
import Sign from "@/public/assets/icons/sign.png";
import "react-clock/dist/Clock.css";
import GenericCard from "@/components/shared/GenericCard";
import WeatherCard from "@/components/home/WeatherCard";
import Image from "next/image";
import nowPageData from "@/lib/nowPageData";
import NowPlaying from "@/components/shared/NowPlaying";
const Clock = dynamic(() => import("react-clock"), { ssr: false });

export default function NowClient() {
  /**
   * Helper function to get current exact time in Delhi timezone
   * @returns {Date}
   */
  const getDelhiTime = () => {
    // Force the Date object to represent the exact current time in Delhi
    const str = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    return new Date(str);
  };

  /** @type {[Date, React.Dispatch<React.SetStateAction<Date>>]} */
  const [value, setValue] = useState(getDelhiTime());
  
  /** @type {[any, React.Dispatch<React.SetStateAction<any>>]} */
  const [weatherData, setWeatherData] = useState(nowPageData.weather);
  
  /** @type {[Array<{heading: string, content: string, icon: string}>, React.Dispatch<React.SetStateAction<Array<any>>>]} */
  const [items, setItems] = useState(nowPageData.items);
  
  /** @type {[string, React.Dispatch<React.SetStateAction<string>>]} */
  const [location, setLocation] = useState(nowPageData.location);

  useEffect(() => {
    // 1. Tick the clock every second for Delhi time
    const interval = setInterval(() => setValue(getDelhiTime()), 1000);

    // 2. Fetch Live Weather Data
    fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setWeatherData(data);
      })
      .catch((err) => console.error("Weather fetch error:", err));

    // 3. Fetch Live Notion Statuses
    fetch("/api/now")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error && data.items) {
          // Keep the Listening item from the fallback if Notion doesn't have it
          const listeningItem = nowPageData.items.find((i) => i.heading === "Listening");
          setItems([...data.items, listeningItem]);
          
          // Set location if returned from Notion
          if (data.location) {
            setLocation(data.location);
          }
        }
      })
      .catch((err) => console.error("Notion fetch error:", err));

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="px-12 pb-10 pt-32 md:px-24 lg:px-32 xl:px-48 2xl:px-80">
      <div className="flex flex-col items-center justify-between gap-10">
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          <Card
            heading={"Time at my place"}
            subHeading={location}
            content={
              <Clock
                value={value}
                className="mt-2 text-gray-500 dark:text-gray-100"
              />
            }
          />
          <Card
            heading={"Weather at my place"}
            subHeading={location}
            content={<WeatherCard {...weatherData} />}
          />
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {items.filter(Boolean).map((item, index) => (
            <div key={index} className="flex h-full w-full">
              {item.heading === "Listening" ? (
                <div className="flex w-full items-center justify-start xl:justify-center">
                  <NowPlaying />
                </div>
              ) : (
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
              )}
            </div>
          ))}
        </div>
        <div className="relative flex w-full items-center py-5">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="mx-4 flex-shrink text-gray-400">~~~~~</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <p className="mt-1 text-base font-medium  text-gray-500 dark:text-gray-500">
          {nowPageData.footerText}
        </p>
        <ul className="mb-20 w-full list-disc space-y-2 ps-5 text-base text-gray-600 marker:text-primary dark:text-gray-100">
          {nowPageData.footerLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
        <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-green-600  p-4 shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:text-gray-100 md:p-5 ">
          <Image
            className="inline-block size-[62px] rounded-lg"
            src={Sign}
            alt="My Signature"
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
