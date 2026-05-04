import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import fs from "fs";
import path from "path";
import Image from "next/image";
import { PHOTOS_DIR } from "@/lib/constants";
import { genPageMetadata } from "@/lib/seo";

export const metadata = genPageMetadata({ title: "Photography" });

export default function PhotographyPage() {
  const files = fs.readdirSync(PHOTOS_DIR);
  const photos = files.map((file, i) => ({
    location: path.join("/assets", "photos", file),
    alt: file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
    key: i,
  }));

  return (
    <main className="flex flex-col items-center justify-between px-12 sm:px-24 md:px-32 lg:px-48 xl:px-64">
      <PageHeader pageName="photography" />

      <div className="w-full columns-1 gap-10 sm:columns-2 md:columns-3 lg:columns-4 2xl:columns-5">
        {photos.map((photo) => (
          <div
            className="z-10 scale-100 py-14 transition-all duration-200 ease-out hover:z-50 hover:scale-[1.02]"
            style={{ perspective: "800px" }}
            key={photo.key}
          >
            <div className="max-h-[430px] rounded-md transition-all duration-200 ease-out">
              <Image
                className="object-cover"
                src={photo.location}
                alt={photo.alt}
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
    </main>
  );
}
