import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-48">
      <div className="w-full space-y-2 pb-8 pt-6 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-relaxed">
          Resume
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Welcome to my Resume page! Here you&apos;ll find a detailed overview
          of my professional journey, skills, and accomplishments. As a
          technology enthusiast and Software Engineer II at Cisco, I bring a
          blend of technical expertise, creativity, and a passion for innovation
          to the table.
        </p>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Browse through my resume to learn more about my professional
          background, projects, and contributions to the tech industry. If you
          have any questions or would like to discuss potential opportunities,
          please feel free to reach out. Thank you for visiting!
        </p>
      </div>
      <div className="w-full pb-10  pt-32 ">
        <div>
          <iframe className="aspect-square w-full" src="/assets/resume.pdf" />
        </div>
      </div>
    </main>
  );
}
