import siteMetadata from "@/lib/metadata";
import Icon from "@/components/atom/icon";
import CustomLink from "@/components/atom/customLink";

const AnalyticsLink = () => {
  return (
    <CustomLink href={siteMetadata.analyticsURL} className="pl-3 pr-5">
      <Icon kind="chart" size={30} />
    </CustomLink>
  );
};

export default AnalyticsLink;
