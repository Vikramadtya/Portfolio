import Greetings from "@/components/organisms/greeting";
import Avatar from "@/components/atom/avatar";
import React from "react";
import BlogLinks from "@/components/organisms/blogLinks";
import SpotifyNowPlaying from "@/components/molecules/spotifyNowPlaying";
import Icon from "@/components/atom/icon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Introduce myself */}
      <div className="mt-8 dark:divide-gray-700 md:mt-8">
        <Greetings />
        <div className="flex flex-col justify-between md:my-4 md:pb-8 xl:flex-row">
          <Avatar />
          {/* <div className="max-h-[430px] overflow-hidden rounded-md">
            <Image src={'/static/images/avatar.jpg'} alt="avatar" width={430} height={350} />
          </div> */}
          <div className="my-auto flex flex-col text-lg leading-8 text-gray-600 dark:text-gray-400">
            <BlogLinks />
            <SpotifyNowPlaying />
            <p className="flex">
              <span className="mr-2">Happy reading</span>
              <Icon kind="clinkingBeerMugs" />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
