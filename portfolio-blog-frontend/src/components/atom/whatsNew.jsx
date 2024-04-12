import Icon from "@/components/atom/icon";

const WhatsNew = () => {
  return (
    <>
      <div
        className="mt-10 w-1/2 rounded-lg border border-gray-200 bg-slate-100 p-4  shadow-lg dark:border-gray-700 dark:bg-gray-800 md:w-1/3"
        role="alert"
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <Icon
              kind={"post"}
              size={"mt-1 size-4 flex-shrink-0 text-blue-600 h-8 w-8"}
            />
          </div>
          <div className="ms-3">
            <h3 className="font-semibold text-gray-800 dark:text-white">
              What&apos;s New?
            </h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
              Check out my blog{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
