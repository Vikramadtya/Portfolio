import React from "react";
import TimeLine from "@/components/organisms/timeLine";
import Icon from "@/components/atom/icon";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="px-8 pb-10 pt-32 md:px-24 lg:px-32 xl:px-48 2xl:px-60">
        <h1 className="flex animate-bounce items-center pb-5 text-5xl">
          <Icon kind="rocket" size="h-12 w-12" />
          <span className="pl-1">Timeline</span>
        </h1>
        <p className="pb-24 text-base">Alexa write something cool here...</p>
        <TimeLine />
      </div>
    </main>
  );
}
