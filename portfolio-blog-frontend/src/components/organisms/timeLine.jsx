import React from "react";
import Icon from "@/components/atom/icon";

const TimeLine = () => {
  return (
    <>
      <div className="grid grid-cols-2 ">
        <div></div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-6">
            <span className="absolute -start-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
              <Icon kind={"work"} size={"h-8 w-8"} />
            </span>
            <div className="pl-1">
              <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                Software Developer II{" "}
                <span className="me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  Cisco
                </span>
              </h3>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on January 13th, 2022
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-100">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
              <h4 className="mb-1 flex items-center text-base font-semibold text-gray-900 dark:text-white">
                Software Developer I{" "}
                <span className="me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  Cisco
                </span>
              </h4>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on January 13th, 2022
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-100">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
              <h4 className="mb-1 flex items-center text-base font-semibold text-gray-900 dark:text-white">
                Software Intern
                <span className="me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  Cisco
                </span>
              </h4>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on January 13th, 2022
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-100">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </div>
          </li>
        </ol>
      </div>
      <div className="grid grid-cols-2 ">
        <ol className="relative border-e border-gray-200 dark:border-gray-700">
          <li className="ms-6">
            <span className="absolute -end-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
              <Icon kind={"degree"} size={"h-8 w-8"} />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Completed B.Tech. in Computer Science and Engineering
            </h3>
            <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
              Indian Institute of Information Technology Guwahati (IIITG){" "}
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on December 2nd, 2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-100">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
        <div></div>
      </div>
      <div className="grid grid-cols-2 ">
        <div></div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="ms-6">
            <span className="absolute -start-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
              <Icon kind={"work"} size={"h-8 w-8"} />
            </span>
            <div className="pl-1">
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Software Intern
                <span className="me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  Securonix
                </span>
              </h3>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2nd, 2021
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-100">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </div>
          </li>
        </ol>
      </div>
      <div className="grid grid-cols-2 ">
        <ol className="relative border-e border-gray-200 dark:border-gray-700">
          <li className="ms-6">
            <span className="absolute -end-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
              <Icon kind={"college"} size={"h-10 w-10"} />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Started B.Tech. in Computer Science and Engineering
            </h3>
            <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
              Indian Institute of Information Technology Guwahati (IIITG){" "}
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on December 2nd, 2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-100">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
        <div></div>
      </div>
      <div className="grid grid-cols-2 ">
        <div></div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="ms-6">
            <span className="absolute -start-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
              <Icon kind={"school"} size={"h-8 w-8"} />
            </span>
            <div className="pl-1">
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                12th Science from CBSE Board{" "}
              </h3>
              <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
                Modern Delhi Public School, Faridabad, Haryana{" "}
              </h3>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2nd, 2021
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-100">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </div>
          </li>
        </ol>
      </div>
      <div className="grid grid-cols-2 ">
        <ol className="relative border-e border-gray-200 dark:border-gray-700">
          <li className="ms-6">
            <span className="absolute -end-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
              <Icon kind={"juniorSchool"} size={"h-8 w-8"} />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              10th from CBSE Board
            </h3>
            <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
              Dynasty International School, Faridabad, Haryana{" "}
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on December 2nd, 2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-100">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
        <div></div>
      </div>
      <div className="grid grid-cols-2 ">
        <div></div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="ms-6">
            <span className="absolute -start-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
              <Icon kind={"growing"} size={"h-8 w-8"} />
            </span>
            <div className="pl-1">
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Growing up
              </h3>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2nd, 2021
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-100">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </div>
          </li>
        </ol>
      </div>
      <div className="grid grid-cols-2 ">
        <ol className="relative border-e border-gray-200 dark:border-gray-700">
          <li className="ms-6">
            <span className="absolute -end-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
              <Icon kind={"born"} size={"h-8 w-8"} />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Born{" "}
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on December 2nd, 2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-100">
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
        <div></div>
      </div>
    </>
  );
};

export default TimeLine;
