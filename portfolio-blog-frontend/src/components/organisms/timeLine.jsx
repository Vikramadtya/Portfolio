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
                Software Developer III{" "}
                <span className="me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  Cisco
                </span>
              </h3>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                <div className="flex flex-col">
                  <div>October 2024 to Present</div>
                </div>{" "}
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-100">
                Contributing to cross-functional projects .. more to come ;)
              </p>
              <h4 className="mb-1 flex items-center text-base font-semibold text-gray-900 dark:text-white">
                Software Developer II{" "}
                <span className="me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  Cisco
                </span>
              </h4>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                <div className="flex flex-col">
                  <div>October 2022 to October 2024 (2 year 1 months)</div>
                </div>{" "}
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-100">
                Architected key solutions like the Policy Analyser and Zero
                Trust policies, driving significant business impact. Led efforts
                to design and optimize core functionalities, improve
                performance, and integrate advanced features.
              </p>
              <h4 className="mb-1 flex items-center text-base font-semibold text-gray-900 dark:text-white">
                Software Developer I{" "}
                <span className="me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  Cisco
                </span>
              </h4>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                <div className="flex flex-col">
                  <div>August 2021 to September 2022 (1 year 2 months)</div>
                </div>
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-100">
                Focused on foundational development tasks, including
                implementing backend services, optimizing code performance, and
                building robust APIs. Collaborated with team members to execute
                well-defined projects, ensuring high-quality and maintainable
                code while gaining hands-on experience.
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
              May, 2021
            </time>
            <p>
              Graduated with a solid academic foundation and practical
              experience in building scalable and efficient solutions.
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
                <div className="flex flex-col">
                  <div>August 2020 - April 2021 (9 months)</div>
                </div>
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-100">
                Developed microservices for automated incident reporting and
                email notifications using Spring Framework and Jasper Reports.
                Additionally, created scripts to streamline various tasks and
                automated data analysis reports, improving efficiency for the
                Cyber Threat Analysis (CTA) team.
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
              Continued B.Tech. in Computer Science and Engineering
            </h3>
            <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
              Indian Institute of Information Technology Guwahati (IIITG){" "}
            </h3>
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
              <h3 className="mb-1 flex items-center text-base font-semibold text-gray-900 dark:text-white">
                Software Intern
                <span className="me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  Cisco
                </span>
              </h3>
              <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                <div className="flex flex-col">
                  <div>May 2020 to July 2020 (3 months)</div>
                </div>
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-100">
                Contributed to enhancing network security by developing tools
                for real-time threat detection and integrating frameworks to
                analyze and process data efficiently. This work improved system
                capabilities and strengthened overall security measures.
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
              August, 2017
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-100">
              Began my B.Tech. in Computer Science and Engineering at IIIT
              Guwahati, focusing on foundational and advanced concepts in
              algorithms, data structures, operating systems, and software
              engineering, while developing a strong technical and
              problem-solving skill set.
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
                2015-2016
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
              2013-2014
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-100">
              Got good grades & decided to focus on physics, chemistry, and
              mathematics.
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
              <p className="text-base font-normal text-gray-500 dark:text-gray-100">
                Growing up, life was all about cricket in the streets,
                late-night study sessions that turned into storytelling
                marathons, and the simple joy of Maggi shared with friends on
                rainy afternoons.
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
              February, 1999
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-100">
              Getting born was my first big adventure—entering the world crying,
              clueless, and ready to take on whatever life had in store.
            </p>
          </li>
        </ol>
        <div></div>
      </div>
    </>
  );
};

export default TimeLine;
