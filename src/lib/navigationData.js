import data from "@/../_content/config/navigationData.json";
import siteMetadata from "@/lib/metadata";

const mapLinks = (links) => {
  return links.map(link => {
    let href = link.href;
    if (href === "{{blogLink}}") href = siteMetadata.blogLink;
    if (href === "{{analyticsURL}}") href = siteMetadata.analyticsURL;
    return { ...link, href };
  });
};

const navLinks = mapLinks(data.navLinks);
export const dropDownMenuNavLinks = mapLinks(data.dropDownMenuNavLinks);
export default navLinks;
