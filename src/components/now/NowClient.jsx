"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
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

const TIMEZONE = "Asia/Kolkata";
const WEATHER_REFRESH_MS = 10 * 60 * 1000;

/** Current wall-clock time in my timezone, as a local Date the clock can render. */
const getMyTime = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: TIMEZONE }));

const formatTime = (date) =>
  date.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", hour12: true });

export default function NowClient({ latestBook }) {
  const [now, setNow] = useState(getMyTime());
  const [weather, setWeather] = useState(null);
  const [weatherFailed, setWeatherFailed] = useState(false);
  const [location, setLocation] = useState(nowPageData.location);

  // The Reading card follows the newest book on my shelf; Notion can override any card.
  const defaultItems = nowPageData.items.map((item) =>
    item.heading === "Reading" && latestBook
      ? {
          ...item,
          content: `Latest on my bookshelf: ${latestBook.title}. Have a look at what else is on it.`,
          href: "/reading",
        }
      : item,
  );
  const [items, setItems] = useState(defaultItems);

  useEffect(() => {
    // 1. Tick the clock every second
    const tick = setInterval(() => setNow(getMyTime()), 1000);

    // 2. Live weather, refreshed every 10 minutes
    const loadWeather = () =>
      fetch("/api/weather")
        .then((res) => res.json())
        .then((data) => {
          if (data.error) throw new Error(data.error);
          setWeather(data);
          setWeatherFailed(false);
        })
        .catch(() => setWeatherFailed(true));
    loadWeather();
    const refresh = setInterval(loadWeather, WEATHER_REFRESH_MS);

    // 3. Optional Notion statuses (only when NOTION_TOKEN / NOTION_DATABASE_ID are set)
    fetch("/api/now")
      .then((res) => res.json())
      .then((data) => {
        if (!data.error && data.items?.length) {
          const listening = nowPageData.items.find((i) => i.heading === "Listening");
          setItems([...data.items, listening].filter(Boolean));
          if (data.location) setLocation(data.location);
        }
      })
      .catch(() => {});

    return () => {
      clearInterval(tick);
      clearInterval(refresh);
    };
  }, []);

  return (
    <main className="px-6 pb-10 pt-16 md:px-24 lg:px-32 xl:px-48 2xl:px-80">
      <div className="flex flex-col items-center justify-between gap-10">
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          <Card
            heading="Time at my place"
            subHeading={`${location} · ${formatTime(now)}`}
            content={<Clock value={now} className="mt-2 text-gray-500 dark:text-gray-100" />}
          />
          <Card
            heading="Weather at my place"
            subHeading={location}
            content={
              weather ? (
                <WeatherCard {...weather} />
              ) : (
                <p className="py-16 text-sm text-muted-foreground">
                  {weatherFailed ? "Weather is unavailable right now." : "Checking the sky…"}
                </p>
              )
            }
          />
        </div>
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          {items.filter(Boolean).map((item, index) => (
            <div key={index} className="flex h-full w-full">
              {item.heading === "Listening" ? (
                <div className="flex w-full items-center justify-start xl:justify-center">
                  <NowPlaying />
                </div>
              ) : (
                <GenericCard
                  icon={<Icon kind={item.icon} size="inline-block size-[62px] rounded-lg" />}
                  content={item.content}
                  heading={item.heading}
                  href={item.href}
                />
              )}
            </div>
          ))}
        </div>
        <div className="relative flex w-full items-center py-5">
          <div className="flex-grow border-t border-border"></div>
          <span className="mx-4 flex-shrink text-muted-foreground">~~~~~</span>
          <div className="flex-grow border-t border-border"></div>
        </div>
        <p className="mt-1 max-w-2xl text-center text-base font-medium text-foreground/70">
          {nowPageData.footerText}
        </p>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {nowPageData.footerLinks.map((link) => (
            <li key={link.href}>
              {link.href.startsWith("http") ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {link.label} ↗
                </a>
              ) : (
                <Link href={link.href} className="text-primary hover:underline">
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mb-16 flex flex-col items-center rounded-xl border border-border bg-card p-4 shadow-sm md:p-5">
          <Image className="inline-block size-[62px] rounded-lg" src={Sign} alt="My Signature" />
        </div>
      </div>
    </main>
  );
}

const Card = ({ heading, subHeading, content }) => (
  <div className="flex flex-col rounded-xl border bg-card p-4 shadow-sm md:p-5">
    <h3 className="font-serif text-lg font-medium text-foreground">{heading}</h3>
    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
      {subHeading}
    </p>
    <div className="flex h-full items-center justify-center align-middle">{content}</div>
  </div>
);
