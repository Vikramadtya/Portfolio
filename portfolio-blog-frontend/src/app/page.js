import Greetings from "@/components/organisms/greeting";
import Avatar from "@/components/atom/avatar";
import React from "react";
import BlogLinks from "@/components/organisms/blogLinks";
import Icon from "@/components/atom/icon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24 pl-80 pr-80 pt-24">
      {/* Introduce myself */}
      <div className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-400 md:mt-8">
        <Greetings />
        <div className="grid grid-cols-2 gap-4">
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
                <Icon kind="clinkingBeerMugs" size={30} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
