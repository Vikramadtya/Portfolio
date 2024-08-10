import React from "react";
import { Button } from "@/components/atom/button";
import Icon from "@/components/atom/icon";
import { notify } from "@/lib/notificationService";
import ContactForm from "@/app/contact/contactForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <p className="font-medium text-blue-500 dark:text-blue-400">
              Contact Me
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Get in touch
            </h1>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800">
                <Icon kind="mail" size="h-6 w-6" />
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-100">
                Mail me your query
              </p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">
                vikramaditya.bhadoria@gmail.com
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800">
                <Icon kind="linkedin" size="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                LinkedIn
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-100">
                Connect with me on LinkedIn
              </p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">
                https://www.linkedin.com/in/vikrmadityasngh/
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800">
                <Icon kind="instagram" size="h-6 w-6" />
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Instagram
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-100">
                Liked my photography skills, follow me on Instagram
              </p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">
                https://www.instagram.com/blissfullvibes101/
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-100 sm:text-xl lg:mb-16">
            Not satisfied from above options message me directly below
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
