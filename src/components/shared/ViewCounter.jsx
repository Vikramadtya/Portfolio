"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

export default function ViewCounter({ slug }) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Only increment view if the component is mounted (user actually visited)
    const registerView = async () => {
      try {
        const response = await fetch(`/api/views/${slug}`, {
          method: "POST",
        });
        const data = await response.json();
        setViews(data.views);
      } catch (err) {
        console.error("Error updating views:", err);
      }
    };

    registerView();
  }, [slug]);

  if (views === 0) {
    return null; // Hide if 0 to prevent flickering
  }

  return (
    <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 font-medium">
      <Icon kind="eye" size="h-4 w-4" />
      <span>{views.toLocaleString()} views</span>
    </div>
  );
}
