"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

export default function NowPlaying() {
  const [data, setData] = useState({ isPlaying: false, loading: true });

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch("/api/spotify");
        const json = await response.json();
        setData({ ...json, loading: false });
      } catch (error) {
        setData({ isPlaying: false, loading: false });
      }
    };
    fetchNowPlaying();
    
    // Poll every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  if (data.loading) {
    return (
      <div className="flex h-full w-full animate-pulse items-center gap-5 rounded-xl border border-gray-200 bg-gray-50/50 p-4 dark:border-gray-800 dark:bg-zinc-800/50 md:p-5">
        <div className="h-[62px] w-[62px] rounded-lg bg-gray-200 dark:bg-zinc-700"></div>
        <div className="flex flex-col gap-2">
          <div className="h-4 w-32 rounded bg-gray-200 dark:bg-zinc-700"></div>
          <div className="h-3 w-20 rounded bg-gray-200 dark:bg-zinc-700"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center gap-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-zinc-900/50 md:p-5">
      {data?.albumImageUrl ? (
        <div className="relative h-[62px] w-[62px] flex-shrink-0 overflow-hidden rounded-lg shadow-sm">
          <Image
            alt={data.album}
            src={data.albumImageUrl}
            fill
            sizes="62px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex h-[62px] w-[62px] flex-shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
          <Icon kind="music" size="h-8 w-8 text-zinc-500" />
        </div>
      )}

      <div className="flex min-w-0 flex-col justify-center">
        <a
          className="truncate text-lg font-bold text-gray-900 hover:underline dark:text-white"
          href={data?.songUrl || "https://spotify.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data?.title || "Not Playing"}
        </a>
        <p className="mt-1 truncate text-sm text-gray-500 dark:text-gray-400">
          {data?.isPlaying ? (
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {data.artist}
            </span>
          ) : (
            "Spotify"
          )}
        </p>
      </div>
    </div>
  );
}
