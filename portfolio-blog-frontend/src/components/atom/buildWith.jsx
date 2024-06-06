import Icon from "./icon";
import CustomLink from "./customLink";

const BuildWith = () => (
  <div className="flex items-center">
    <div className="pr-2 text-sm text-gray-500 dark:text-gray-100">
      Build with
    </div>
    <CustomLink href="https://nextjs.org" className="pl-1 pr-1">
      <Icon kind="nextJS" size={"h-5 w-5 dark:invert"} />
    </CustomLink>
    <CustomLink href="https://tailwindcss.com" className="pl-1 pr-1">
      <Icon kind="tailwindCSS" size={"h-5 w-5"} />
    </CustomLink>
    <CustomLink href="https://umami.is" className="pl-1 pr-1">
      <Icon kind="umami" size={"h-5 w-5 dark:invert"} />
    </CustomLink>{" "}
  </div>
);

export default BuildWith;
