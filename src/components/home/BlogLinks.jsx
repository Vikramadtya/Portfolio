import CustomLink from "@/components/shared/CustomLink";
import Icon from "@/components/ui/Icon";
import Link from "next/link";
import homepageLinks from "@/../_content/config/homepageLinks.json";

const BlogLinks = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col space-y-1.5">
        <div className="">
          <p className="text-left rtl:text-right">
            So kick back, take a look around, and get to know a bit about what
            makes me tick as a developer. Feel free to{" "}
            <Link href="/about"> get to know me better.</Link>
          </p>
        </div>
        {homepageLinks.map((link, index) => (
          <CustomLink
            key={index}
            href={link.href}
            className="flex items-center pb-1 pt-1 hover:underline"
          >
            <Icon kind={link.icon} size={"h-8 w-8"} />
            <span data-umami-event={link.event} className="ml-1.5">
              {link.label}
            </span>
          </CustomLink>
        ))}
      </div>
    </div>
  );
};

export default BlogLinks;
