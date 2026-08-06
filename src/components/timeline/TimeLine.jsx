import React from "react";
import Icon from "@/components/ui/Icon";
import timelineData from "@/lib/timelineData";

const RoleItem = ({ title, company, date, description, isFirstItem }) => (
  <>
    <h3
      className={`mb-1 flex items-center text-${isFirstItem ? "lg" : "base"} font-semibold text-gray-900 dark:text-white`}
    >
      {title}
      {company && <span className="timeline-badge">{company}</span>}
    </h3>
    {date && (
      <time className="timeline-date">
        <div className="flex flex-col">
          <div>{date}</div>
        </div>
      </time>
    )}
    {description && <p className="timeline-description">{description}</p>}
  </>
);

const TimelineItem = ({ item, isEven }) => {
  const alignClass = isEven ? "border-s" : "border-e";
  const iconPosClass = isEven ? "-start-5" : "-end-5";
  const contentWrapperClass = isEven ? "pl-1" : "";
  const listClass = isEven ? "ms-6" : "ms-6";
  const listExtraClass = isEven && item.isGrouped ? "mb-10" : "";

  const content = (
    <ol
      className={`relative ${alignClass} border-gray-200 dark:border-gray-700`}
    >
      <li className={`${listClass} ${listExtraClass}`}>
        <span className={`absolute ${iconPosClass} timeline-icon-container`}>
          <Icon kind={item.icon} size={item.iconSize} />
        </span>
        <div className={contentWrapperClass}>
          {item.isGrouped ? (
            item.roles.map((role, idx) => (
              <RoleItem key={idx} {...role} isFirstItem={idx === 0} />
            ))
          ) : (
            <>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
                {item.company && (
                  <span className="timeline-badge">{item.company}</span>
                )}
              </h3>
              {item.subtitle && (
                <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
                  {item.subtitle}
                </h3>
              )}
              {item.date && (
                <time className="timeline-date">
                  <div className="flex flex-col">
                    <div>{item.date}</div>
                  </div>
                </time>
              )}
              {item.description && (
                <p className="timeline-description">{item.description}</p>
              )}
            </>
          )}
        </div>
      </li>
    </ol>
  );

  return (
    <div className="grid grid-cols-2">
      {isEven ? (
        <>
          <div></div>
          {content}
        </>
      ) : (
        <>
          {content}
          <div></div>
        </>
      )}
    </div>
  );
};

const TimeLine = () => {
  return (
    <>
      {timelineData.map((item, idx) => (
        <TimelineItem key={idx} item={item} isEven={idx % 2 === 0} />
      ))}
    </>
  );
};

export default TimeLine;
