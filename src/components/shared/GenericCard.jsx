import React from "react";

const GenericCard = ({ icon, heading, content }) => {
  return (
    <>
      <div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7]">
        <div className="flex items-center">
          <div className="relative inline-block pl-10 pr-10">{icon}</div>
          <div className="pr-10">
            <div className="flex items-center justify-between rounded-t-xl border-b px-4 py-3 dark:border-gray-700 md:px-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                {heading}
              </h3>
            </div>
            <div className="p-4 md:p-5">
              <div className="mt-2 text-gray-500 dark:text-gray-100">{content}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenericCard;
