import CustomLink from "@/components/shared/CustomLink";
import siteMetadata from "@/lib/metadata";

const TechStackList = () => (
  <div className="flex items-center space-x-1">
    <span className="mr-1 text-gray-500 dark:text-gray-400">Built with</span>

    <div className="flex space-x-1.5">
      {siteMetadata.poweredBy.map((tech, index) => (
        <div key={index} className="flex items-center space-x-1">
          <CustomLink href={tech.url}>
            <span className="text-gray-500 underline underline-offset-4 dark:text-gray-400">
              {tech.name}
            </span>
          </CustomLink>
          {index !== siteMetadata.poweredBy.length - 1 && (
            <span className="text-gray-500 dark:text-gray-400">and</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default TechStackList;
