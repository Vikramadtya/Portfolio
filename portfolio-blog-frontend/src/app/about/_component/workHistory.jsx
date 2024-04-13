import Cisco from "../../../../public/assets/company/cisco.png";
import Securonix from "../../../../public/assets/company/securonix.png";
import Image from "next/image";

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
            <button
              type="button"
              className="-ms-1 mt-1 inline-flex items-center gap-x-2 rounded-lg border border-transparent p-1 text-xs text-gray-500 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              James Collins
            </button>
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
            <button
              type="button"
              className="-ms-1 mt-1 inline-flex items-center gap-x-2 rounded-lg border border-transparent p-1 text-xs text-gray-500 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <span className="flex size-4 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[10px] font-semibold uppercase text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                A
              </span>
              Alex Gregarov
            </button>
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
            <button
              type="button"
              className="-ms-1 mt-1 inline-flex items-center gap-x-2 rounded-lg border border-transparent p-1 text-xs text-gray-500 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <img
                className="size-4 flex-shrink-0 rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Image Description"
              />
              James Collins
            </button>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkHistory;
