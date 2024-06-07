import React from "react";
import Icon from "@/components/atom/icon";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-12 md:px-24 lg:px-32 xl:px-48">
      <div className="w-full space-y-2 pb-4 pt-6 md:space-y-5 md:pb-8 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-relaxed">
          Resume
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-100">
          Welcome to my Resume page! Here you&apos;ll find a detailed overview
          of my professional journey, skills, and accomplishments. As a
          technology enthusiast and Software Engineer II at Cisco, I bring a
          blend of technical expertise, creativity, and a passion for innovation
          to the table.
        </p>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-100">
          Browse through my resume to learn more about my professional
          background, projects, and contributions to the tech industry. If you
          have any questions or would like to discuss potential opportunities,
          please feel free to{" "}
          <Link href="/contact" className={"hover:text-blue-800"}>
            reach out{" "}
          </Link>
          .
        </p>
      </div>
      <div className="w-full pb-10  pt-32 ">
        <div>
          <iframe className="aspect-square w-full" src="/assets/resume.pdf" />
        </div>
      </div>
      <div className="flex w-full flex-row items-center space-y-2 pb-4 pt-6 md:space-y-5 md:pb-8">
        <p className="flex flex-row items-center pr-1 text-lg leading-7 text-gray-500 dark:text-gray-400">
          Thank you for visiting{" "}
          <Icon kind="smilingFace" size={"pl-1 h-8 w-8"} />
        </p>
        <div></div>
      </div>
    </main>
  );
}
