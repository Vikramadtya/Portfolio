import Cisco from "../../../../public/assets/company/cisco.png";
import Securonix from "../../../../public/assets/company/securonix.png";
import Image from "next/image";
import React from "react";

const WorkHistory = () => {
  return (
    <>
      <div className="pb-5 pt-10">
        <div className="my-2 ps-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
            Oct 2022 - Present
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 last:after:hidden dark:after:bg-gray-700">
            <div className="relative z-10 flex size-7 items-center justify-center">
              <Image
                className="mt-1 flex size-4  h-8 w-8 flex-shrink-0  items-center justify-center rounded-full border border-gray-200 bg-white text-[10px] font-semibold uppercase text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                src={Cisco}
                alt={""}
              />
            </div>
          </div>

          <div className="grow pb-8 pt-0.5">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Software Engineer II, Cisco
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Find more detailed insctructions here.
            </p>
            <ul className="w-full list-disc  ps-5 text-sm text-gray-600 marker:text-blue-600 dark:text-gray-400">
              <li>FAQ</li>
              <li>License</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="my-2 ps-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
            Aug 2021 - Sep 2022
          </h3>
        </div>
        <div className="flex gap-x-3">
          <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 last:after:hidden dark:after:bg-gray-700">
            <div className="relative z-10 flex size-7 items-center justify-center">
              <Image
                className="mt-1 flex size-4  h-8 w-8 flex-shrink-0  items-center justify-center rounded-full border border-gray-200 bg-white text-[10px] font-semibold uppercase text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                src={Cisco}
                alt={""}
              />
            </div>
          </div>

          <div className="grow pb-8 pt-0.5">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Software Engineer I, Cisco
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Find more detailed insctructions here.
            </p>
            <ul className="w-full list-disc  ps-5 text-sm text-gray-600 marker:text-blue-600 dark:text-gray-400">
              <li>FAQ</li>
              <li>License</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="my-2 ps-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
            Aug 2020 - Apr 2021 | 9 months
          </h3>
        </div>
        <div className="flex gap-x-3">
          <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 last:after:hidden dark:after:bg-gray-700">
            <div className="relative z-10 flex size-7 items-center justify-center">
              <Image
                className="mt-1 flex size-4  h-8 w-8 flex-shrink-0  items-center justify-center rounded-full border border-gray-200 bg-white text-[10px] font-semibold uppercase text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                src={Securonix}
                alt={""}
              />
            </div>
          </div>

          <div className="grow pb-8 pt-0.5">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Engineering Intern, Securonix
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Finally! You can check it out here.
            </p>
            <ul className="w-full list-disc  ps-5 text-sm text-gray-600 marker:text-blue-600 dark:text-gray-400">
              <li>FAQ</li>
              <li>License</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="my-2 ps-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
            May 2020 - Jul 2020 | 3 months
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 last:after:hidden dark:after:bg-gray-700">
            <div className="relative z-10 flex size-7 items-center justify-center">
              <Image
                className="mt-1 flex size-4  h-8 w-8 flex-shrink-0  items-center justify-center rounded-full border border-gray-200 bg-white text-[10px] font-semibold uppercase text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                src={Cisco}
                alt={""}
              />
            </div>
          </div>

          <div className="grow pb-8 pt-0.5">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Engineering Intern, Cisco
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Just chill for now... 😉
            </p>
            <ul className="w-full list-disc  ps-5 text-sm text-gray-600 marker:text-blue-600 dark:text-gray-400">
              <li>FAQ</li>
              <li>License</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkHistory;
