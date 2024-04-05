import React from "react";
import TimeLine from "@/components/molecules/timeLine";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="pb-10 pl-12 pr-12 pt-32 md:pl-80 md:pr-80">
        <TimeLine />
      </div>
    </main>
  );
}
