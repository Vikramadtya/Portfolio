import Greetings from "@/components/organisms/greeting";
import Avatar from "@/components/atom/avatar";
import React from "react";
import BlogLinks from "@/components/organisms/blogLinks";
import Icon from "@/components/atom/icon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Introduce myself */}
      <div className="mt-8 pb-24 pl-12 pr-12 pt-24 text-lg leading-8 text-gray-600 dark:text-gray-400 md:mt-8 md:pl-80 md:pr-80">
        <Greetings />
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Avatar />
          </div>
          <div>
            {" "}
            <div className="my-auto flex flex-col text-lg leading-8 text-gray-600 dark:text-gray-400">
              <BlogLinks />
              {/*<SpotifyNowPlaying />*/}
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
