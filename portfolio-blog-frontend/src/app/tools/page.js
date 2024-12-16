import React from "react";
import Icon from "@/components/atom/icon";

import Docker from "../../../public/assets/icons/tools/docker.svg";
import DrawIo from "../../../public/assets/icons/tools/drawio.svg";
import GitHub from "../../../public/assets/icons/tools/github.svg";
import Insomnia from "../../../public/assets/icons/tools/insomnia.svg";
import Intellij from "../../../public/assets/icons/tools/intellij.svg";
import Overleaf from "../../../public/assets/icons/tools/overleaf.svg";
import Slack from "../../../public/assets/icons/tools/slack.svg";
import Spotify from "../../../public/assets/icons/tools/spotify.svg";
import Sublime from "../../../public/assets/icons/tools/sublime.svg";
import Iterm from "../../../public/assets/icons/tools/terminal.svg";
import Linux from "../../../public/assets/icons/tools/linux.svg";
import Bash from "../../../public/assets/icons/tools/bash.svg";
import GitBook from "../../../public/assets/icons/tools/gitbook.svg";
import Notion from "../../../public/assets/icons/tools/notion.svg";
import Raindrop from "../../../public/assets/icons/tools/raindrop.svg";
import Airtable from "../../../public/assets/icons/tools/airtable.svg";

const tools = [
  {
    id: 1,
    name: "Sublime",
    image: Sublime,
    description: "Favourite editor for generic task",
  },
  {
    id: 2,
    name: "Intellij IDEA",
    image: Intellij,
    description: "Best java IDE ever",
  },
  {
    id: 3,
    name: "Insomnia",
    image: Insomnia,
    description: "The REST API client i am using",
  },
  {
    id: 4,
    name: "Docker",
    image: Docker,
    description: "Favourite editor for generic task",
  },
  {
    id: 5,
    name: "Draw.io",
    image: DrawIo,
    description: "Favourite editor for generic task",
  },
  {
    id: 6,
    name: "Github",
    image: GitHub,
    description: "Best java IDE ever",
  },
  {
    id: 7,
    name: "Overleaf",
    image: Overleaf,
    description: "The REST API client i am using",
  },
  {
    id: 8,
    name: "Slack",
    image: Slack,
    description: "Favourite editor for generic task",
  },
  {
    id: 9,
    name: "Spotify",
    image: Spotify,
    description: "Favourite editor for generic task",
  },
  {
    id: 10,
    name: "ITerm2",
    image: Iterm,
    description: "Favourite editor for generic task",
  },
  {
    id: 11,
    name: "Linux",
    image: Linux,
    description: "Favourite editor for generic task",
  },
  {
    id: 12,
    name: "Bash",
    image: Bash,
    description: "Favourite editor for generic task",
  },
  {
    id: 13,
    name: "GitBook",
    image: GitBook,
    description: "Favourite editor for generic task",
  },
  {
    id: 14,
    name: "Notion",
    image: Notion,
    description: "Favourite editor for generic task",
  },
  {
    id: 15,
    name: "Raindrop",
    image: Raindrop,
    description: "Favourite editor for generic task",
  },
  {
    id: 16,
    name: "Airtable",
    image: Airtable,
    description: "Favourite editor for generic task",
  },
];

export default function Home() {
  return (
    <main>
      <div className="px-8 py-12 md:px-24 lg:px-32 xl:px-48 2xl:px-60">
        <p className="text-base">
          A curated collection of utilities and resources designed to simplify
          tasks, boost productivity, and fuel creativity.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 px-12 pb-10 md:px-24 lg:grid-cols-2 lg:px-32 xl:px-48 2xl:px-60">
        {tools.map((tool) => {
          const IconSvg = tool.image;

          return (
            <div
              className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7]"
              key={tool.id}
            >
              <div className="flex items-center">
                <div className="relative inline-block pl-10 pr-10">
                  <IconSvg className={"inline-block size-[62px] rounded-lg"} />
                </div>
                <div className="pr-10">
                  <div className="flex items-center justify-between rounded-t-xl border-b px-4 py-2 dark:border-gray-700 md:px-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {tool.name}
                    </h3>
                  </div>
                  <div className="px-4 pb-2 md:px-5">
                    <p className="mt-2 text-gray-500 dark:text-gray-100">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
