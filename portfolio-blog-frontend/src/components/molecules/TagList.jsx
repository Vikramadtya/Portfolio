import React from 'react';
import Tag from '@/components/atom/tag'; // Assuming this is the correct path

const TagList = ({ tags, tagClassName, idStartIndex = 0 }) => {
  if (!tags || tags.length === 0) {
    return null; // Don't render anything if there are no tags
  }

  return (
    <>
      {tags.map((tag, index) => (
        <Tag
          key={`tag-${index}`}
          text={tag}
          id={(idStartIndex + index) % 9}
          className={tagClassName} // Pass tagClassName to Tag component's className prop
        />
      ))}
    </>
  );
};

export default TagList;
