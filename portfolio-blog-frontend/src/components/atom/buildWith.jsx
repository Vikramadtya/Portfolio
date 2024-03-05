import Icon from "./icon";
import CustomLink from "./customLink";

const BuildWith = () => (
  <div className="flex items-center">
    <div className="pr-2 text-sm text-gray-500 dark:text-gray-400">
      Build with
    </div>
    <div>
      <CustomLink href="https://nextjs.org" className="pl-1 pr-1">
        <Icon kind="nextJS" size={15} />
      </CustomLink>
      <CustomLink href="https://tailwindcss.com" className="pl-1 pr-1">
        <Icon kind="tailwindCSS" size={15} />
      </CustomLink>
      <CustomLink href="https://umami.is" className="pl-1 pr-1">
        <Icon kind="umami" size={15} />
      </CustomLink>{" "}
    </div>
  </div>
);

export default BuildWith;
