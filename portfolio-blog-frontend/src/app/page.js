import Greetings from "@/components/organisms/greeting";
import Avatar from "@/components/atom/avatar";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Greetings />
      <Avatar />
    </main>
  );
}
