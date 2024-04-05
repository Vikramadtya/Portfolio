import Icon from "@/components/atom/icon";
import siteMetadata from "@/lib/metadata";
import Link from "next/link";

const WhatsNew = () => {
  return (
    <>
      <div className="mt-10 flex flex-col gap-4 rounded-xl border border-border bg-slate-100 p-2 text-lg leading-8 text-gray-600 text-primary dark:bg-zinc-900 dark:text-gray-400">
        <div>
          <div className="flex items-center pb-3">
            <Icon kind={"post"} size={"h-8 w-8"} />
            <h1 className="text-lg font-semibold">What's New?</h1>
          </div>

          <div>
            Check out my blog <Link href={siteMetadata.blogLink}>here</Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
