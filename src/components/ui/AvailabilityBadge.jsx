import React from 'react';
import siteMetadata from '@/lib/metadata';

export default function AvailabilityBadge() {
  if (!siteMetadata.openToWork) return null;

  return (
    <div className="invisible flex items-center gap-3 rounded-xl border border-border px-2 lg:visible">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500" />
      </span>
      <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.openToWorkText}</a>
    </div>
  );
}
