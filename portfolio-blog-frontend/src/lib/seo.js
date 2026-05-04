import siteMetadata from "@/lib/metadata";

export function genPageMetadata({ title, description, image, ...rest }) {
  return {
    title: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
    description: description || siteMetadata.description,
    openGraph: {
      title: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
      description: description || siteMetadata.description,
      url: "./",
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
      card: "summary_large_image",
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    ...rest,
  };
}
