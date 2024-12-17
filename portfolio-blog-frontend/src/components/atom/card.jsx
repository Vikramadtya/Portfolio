import React from "react";
import Tag from "@/components/atom/tag";
import Link from "next/link";
import Image from "next/image";

const Card = ({ title, description, tags, slug, cover }) => {
  const tagsComponent = [];
  for (let i = 0; i < tags.length; ++i) {
    tagsComponent.push(<Tag key={i} text={tags[i]} id={i % 9} />);
  }
  return (
    <>
      <div className="overflow-hidden rounded-xl border-2 bg-white bg-clip-border text-gray-700 shadow-md hover:border-solid hover:border-gray-700 dark:bg-black dark:hover:border-white">
        <Link
          href={slug}
          className="flex flex-col items-center rounded-lg md:max-w-xl md:flex-row"
        >
          <Image
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={`/assets/${cover}`}
            alt=""
            width={800}
            height={800}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <i>{description}</i>
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
