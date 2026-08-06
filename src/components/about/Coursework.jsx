"use client";
import React, { useState } from "react";

const courses = [
  { key: "1", courseId: "CS101", courseName: "Computer Programming" },
  { key: "2", courseId: "CS110", courseName: "Computer Programming Lab" },
  { key: "3", courseId: "CS102", courseName: "IT Workshop I" },
  { key: "4", courseId: "EC101", courseName: "Digital Design" },
  { key: "5", courseId: "EC110", courseName: "Digital Design Lab" },
  { key: "6", courseId: "EC102", courseName: "Electrical Circuit Analysis" },
  { key: "7", courseId: "HS101", courseName: "English" },
  { key: "8", courseId: "MA101", courseName: "Mathematics I" },
];

const Coursework = () => {
  const [collapse, setCollapse] = useState(true);

  return (
    <>
      <div className="hs-accordion-group">
        <div
          className="hs-accordion active"
          id="hs-basic-with-arrow-heading-one"
        >
          <button
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 dark:hs-accordion-active:text-blue-500 inline-flex w-full items-center gap-x-3 rounded-lg py-3 text-start font-semibold text-gray-800 hover:text-gray-500 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 dark:focus:outline-none"
            aria-controls="hs-basic-with-arrow-collapse-one"
            onClick={() => {
              setCollapse(!collapse);
            }}
          >
            <svg
              className={` ${collapse ? "" : "hidden"} size-4`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
            <svg
              className={` ${collapse ? "hidden" : ""} size-4`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6"></path>
            </svg>
            Coursework
          </button>
          <div
            id="hs-basic-with-arrow-collapse-one"
            className={`hs-accordion-content  w-full overflow-hidden transition-[height] duration-300 ${collapse ? "hidden" : ""}`}
            aria-labelledby="hs-basic-with-arrow-heading-one"
          >
            <ul className="ml-10 w-full list-disc  ps-5 text-base text-gray-600 marker:text-blue-600 dark:text-gray-100">
              {courses.map((course) => (
                <li key={course.key}>
                  <span className="text-black">{course.courseId}</span>{" "}
                  <span className="px-2">:</span>
                  <span className="text-gray">{course.courseName} </span>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coursework;
