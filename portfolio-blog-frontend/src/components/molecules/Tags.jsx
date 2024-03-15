import Tag from "@/components/atom/tag";
import React from "react";

const Tags = ({ tags }) => {
  const tagsComponent = [];
  for (let i = 0; i < tags.length; ++i) {
    tagsComponent.push(<Tag key={i} text={tags[i]} id={i % 9} />);
  }
  return (
    <div className="mt-1 flex flex-wrap gap-1 p-6">
      {tags.map((tag) => (
        <Tag key={tag} text={tag} id={3} />
      ))}
    </div>
  );
};

export default Tags;
