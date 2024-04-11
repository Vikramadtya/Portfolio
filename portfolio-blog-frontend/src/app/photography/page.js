import React from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";

export default function Home() {
  const projects = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "public",
    "assets",
    "photos",
  );

  const files = fs.readdirSync(projects);
  const photos = [];
  for (let i = 0; i < files.length; ++i) {
    photos.push({
      location: path.join("/assets", "photos", files[i]),
      key: i,
    });
  }

  return (
    <main className="flex flex-col items-center justify-between px-48">
      <div className="w-full space-y-2 pb-8 pt-6 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-relaxed">
          Photo wall
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          I primarily cover tech topics, occasionally sharing insights into my
          personal life.
        </p>
      </div>

      <div className="w-full columns-4 gap-10 ">
        {photos.map((photo) => (
          <div
            className="z-10 scale-100 py-10 transition-all duration-200 ease-out hover:z-50 hover:scale-[1.02]"
            style={{ perspective: "800px" }}
            key={photo.key}
          >
            <div className="max-h-[430px] rounded-md transition-all duration-200 ease-out">
              <Image
                className="object-cover"
                src={photo.location}
                alt={""}
                width="500"
                height="500"
                style={{
                  boxShadow: "13px 13px 43px #b3b3b3",
                  borderRadius: "6px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full space-y-2 pb-8 pt-6 md:space-y-5 ">
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          I primarily cover tech topics, occasionally sharing insights into my
          personal life.
        </p>
      </div>
    </main>
  );
}
