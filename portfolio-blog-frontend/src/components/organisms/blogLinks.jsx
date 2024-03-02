import CustomLink from "@/components/atom/CustomLink";
import Icon from "@/components/atom/icon";

const BlogLinks = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col space-y-1.5">
        <CustomLink href="/blog" className="hover:underline">
          <Icon kind="memo" />
          <span data-umami-event="home-link-blog" className="ml-1.5">
            My writings
          </span>
        </CustomLink>
        <CustomLink href="/projects" className="hover:underline">
          <Icon kind="wrenchAndHammer" />
          <span data-umami-event="home-link-projects" className="ml-1.5">
            What have I built?
          </span>
        </CustomLink>
      </div>
      <div className="flex flex-col space-y-1.5">
        <CustomLink href="/about" className="hover:underline">
          <Icon kind="manWithMonocle" />
          <span data-umami-event="home-link-about" className="ml-1.5">
            More about me and myself
          </span>
        </CustomLink>
        <CustomLink href="/resume" className="hover:underline">
          <Icon kind="briefcase" />
          <span data-umami-event="home-link-resume" className="ml-1.5">
            My career
          </span>
        </CustomLink>
      </div>
    </div>
  );
};

export default BlogLinks;
