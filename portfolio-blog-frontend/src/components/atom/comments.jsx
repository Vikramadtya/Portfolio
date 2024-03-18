"use client";
import Giscus from "@giscus/react";
import SiteMetadata from "@/lib/metadata";
import { useTheme } from "next-themes";

const Comments = () => {
  const { theme } = useTheme();

  return (
    <>
      <Giscus
        id={SiteMetadata.giscus.label}
        repo={SiteMetadata.giscus.commentsRepo}
        repoId={SiteMetadata.giscus.commentsRepoId}
        category={SiteMetadata.giscus.gitHubDiscussionCategory}
        categoryId={SiteMetadata.giscus.gitHubDiscussionCategoryId}
        mapping={SiteMetadata.giscus.commentsMapping}
        reactionsEnabled={SiteMetadata.giscus.reactionsEnabled}
        emitMetadata={SiteMetadata.giscus.emitMetadata}
        inputPosition={SiteMetadata.giscus.inputPosition}
        theme={
          theme === "light"
            ? SiteMetadata.giscus.lightTheme
            : SiteMetadata.giscus.darkTheme
        }
        lang={SiteMetadata.giscus.lang}
        loading={SiteMetadata.giscus.loading}
      />
    </>
  );
};

export default Comments;
