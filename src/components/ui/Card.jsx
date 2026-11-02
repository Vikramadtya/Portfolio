import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ title, description, slug, cover }) => {
  return (
    <div className="project-card-container group mb-0 mt-5 max-w-none break-inside-avoid p-0">
      <Link
        href={slug}
        className="flex flex-col items-center rounded-lg md:max-w-xl md:flex-row"
      >
        <Image
          className="h-64 w-full rounded-t-lg object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={`/assets/${cover}`}
          alt={title}
          width={800}
          height={800}
          sizes="(max-width: 768px) 100vw, 192px"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 font-serif text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-primary">
            {title}
          </h5>
          <p className="mb-3 font-normal text-muted-foreground">
            <i>{description}</i>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
