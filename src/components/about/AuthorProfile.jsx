import React from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import SocialIcon from '@/components/ui/SocialIcon';
import siteMetadata from '@/lib/metadata';

export default function AuthorProfile() {
  return (
    <div className="flex w-full flex-col items-center px-6 pt-8 xl:sticky xl:top-0">
      <div className="px-6">
        <Image
          src={siteMetadata.profileImage}
          alt={`Photo of ${siteMetadata.author}`}
          width={400}
          height={300}
          priority
          sizes="176px"
          className="h-44 w-44 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        />
      </div>
      <h3 className="flex items-center gap-1 pb-2 pt-4 font-bold leading-8">
        {siteMetadata.author}
        <Icon kind="blueTick" size="h-6 w-6" />
      </h3>
      <div className="text-gray-500 dark:text-gray-100">
        {siteMetadata.designation}, {siteMetadata.company}
      </div>
      <div className="flex items-center space-x-4 pt-4">
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={20} />
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={20} />
        <SocialIcon kind="github" href={siteMetadata.github} size={20} />
      </div>
    </div>
  );
}
