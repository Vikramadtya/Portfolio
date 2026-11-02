import React from "react";
import Icon from "@/components/ui/Icon";
import ContactForm from "@/components/contact/ContactForm";
import siteMetadata from "@/lib/metadata";
import { getPageContent } from "@/lib/markdown";
import { genPageMetadata } from "@/lib/seo";
import contactData from "@/../_content/components/contact.json";

export const metadata = genPageMetadata({ title: "Contact" });

export default function ContactPage() {
  const pageData = getPageContent("contact");
  return (
    <main className="flex flex-col items-center justify-between">
      <section>
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <p className="font-medium text-primary dark:text-primary">
              {pageData.subtitle}
            </p>
            <h1 className="mt-2 font-serif text-3xl font-medium text-foreground md:text-4xl">
              {pageData.title}
            </h1>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="rounded-full bg-primary/15 p-3 text-primary">
                <Icon kind="mail" size="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-serif text-lg font-medium text-foreground">
                {contactData.emailCard.title}
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-100">
                {contactData.emailCard.description}
              </p>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="mt-2 text-primary hover:underline dark:text-primary"
              >
                {siteMetadata.email}
              </a>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="rounded-full bg-primary/15 p-3 text-primary">
                <Icon kind="linkedin" size="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-serif text-lg font-medium text-foreground">
                {contactData.linkedinCard.title}
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-100">
                {contactData.linkedinCard.description}
              </p>
              <a
                href={siteMetadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-primary hover:underline dark:text-primary"
              >
                {siteMetadata.linkedin}
              </a>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="rounded-full bg-primary/15 p-3 text-primary">
                <Icon kind="instagram" size="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-serif text-lg font-medium text-foreground">
                {contactData.instagramCard.title}
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-100">
                {contactData.instagramCard.description}
              </p>
              <a
                href={siteMetadata.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-primary hover:underline dark:text-primary"
              >
                {siteMetadata.instagram}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-100 sm:text-xl lg:mb-16">
            {pageData.content}
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
