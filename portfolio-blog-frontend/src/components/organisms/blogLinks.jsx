import CustomLink from "@/components/atom/CustomLink";
import Icon from "@/components/atom/icon";
import Link from "next/link";

const BlogLinks = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col space-y-1.5">
        <div className="prose dark:prose-dark lg:prose-lg">
          <p className="text-left rtl:text-right">
            So kick back, take a look around, and get to know a bit about what
            makes me tick as a developer. Feel free to{" "}
            <Link href="/about"> get to know me better.</Link>
          </p>
        </div>

        <CustomLink
          href="/blog"
          className="flex items-center pb-1 pt-1 hover:underline"
        >
          <Icon kind="memo" size={30} />
          <span data-umami-event="home-link-blog" className="ml-1.5">
            My writings
          </span>
        </CustomLink>
        <CustomLink
          href="/projects"
          className="flex items-center pb-1 pt-1 hover:underline"
        >
          <Icon kind="wrenchAndHammer" size={30} />
          <span data-umami-event="home-link-projects" className="ml-1.5">
            What have I built?
          </span>
        </CustomLink>
        <CustomLink
          href="/resume"
          className="flex items-center pb-1 pt-1 hover:underline"
        >
          <Icon kind="briefcase" size={30} />
          <span data-umami-event="home-link-resume" className="ml-1.5">
            My career
          </span>
        </CustomLink>
        <CustomLink
          href="/about"
          className="flex items-center pb-1 pt-1 hover:underline"
        >
          <Icon kind="manWithMonocle" size={30} />
          <span data-umami-event="home-link-about" className="ml-1.5">
            More about me and myself
          </span>
        </CustomLink>
      </div>
    </div>
  );
};

export default BlogLinks;
