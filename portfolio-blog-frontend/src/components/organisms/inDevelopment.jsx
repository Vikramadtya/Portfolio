import Icon from "@/components/atom/icon";
import CustomLink from "@/components/atom/customLink";

const InDevelopment = () => {
  return (
    <div className="flex items-center">
      <Icon kind="me" size={200} />
      <div className="pl-10">
        <h1 className="text-5xl font-bold ">Uh oh...</h1>
        <p className="flex items-center pt-5 ">
          <span>The site is still under development !</span>
          <span className="pl-2">
            <Icon kind="wrenchAndHammer" size={18} />
          </span>
        </p>
        <span>the requested page is not available</span>

        <CustomLink
          href="/"
          className="flex items-center pb-1 pt-1 hover:underline"
        >
          Take me
          <span className="pl-2">
            <Icon kind="home" size={25} />
          </span>
        </CustomLink>
      </div>
    </div>
  );
};

export default InDevelopment;
