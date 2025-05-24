import Greetings from "@/components/organisms/greeting";
import Avatar from "@/components/atom/avatar";
import React from "react";
import BlogLinks from "@/components/organisms/blogLinks";
import Icon from "@/components/atom/icon";
import WhatsNew from "@/components/atom/whatsNew";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <WhatsNew />
      <div className="mt-8 pb-24 pl-12 pr-12 pt-24 text-lg leading-8 text-gray-600 dark:text-gray-100 md:pl-24 md:pr-24 lg:pl-32 lg:pr-32 xl:mt-8 xl:pl-64 xl:pr-64 2xl:mt-8 2xl:pl-80 2xl:pr-80">
        <Greetings />
        <div className="grid gap-x-4 gap-y-40 xl:grid-cols-2">
          <div className="flex items-center justify-center xl:items-start xl:justify-start">
            <Avatar />
          </div>
          <div>
            {" "}
            <div className="my-auto flex flex-col text-lg leading-8 text-gray-600 dark:text-gray-100">
              <BlogLinks />
              <br />
              <p className="flex items-center">
                <span className="mr-2">
                  Thanks for dropping by ! Happy reading
                </span>
                <Icon kind="clinkingBeerMugs" size={"h-20 w-20"} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
