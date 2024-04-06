import React from "react";
import Icon from "@/components/atom/icon";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="pb-10 pl-12 pr-12 pt-32 md:pl-80 md:pr-80">
        <h1 className="flex animate-bounce items-center pb-5 text-5xl">
          <Icon kind="stats" size="h-12 w-12" />
          <span className="pl-1">Stats</span>
        </h1>
        <p className="pb-24 text-base">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don`&apos;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn`&apos;t anything embarrassing hidden in the
          middle of text. All the Lorem Ipsum generators on the Internet tend to
          repeat predefined chunks as necessary, making this the first true
          generator on the Internet. It uses a dictionary of over 200 Latin
          words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
          is therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
      </div>
    </main>
  );
}
