import React from "react";
import { Button } from "@/components/atom/button";
import Icon from "@/components/atom/icon";

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
              <p className="mt-2 text-gray-500 dark:text-gray-400">
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
              <p className="mt-2 text-gray-500 dark:text-gray-400">
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
              <p className="mt-2 text-gray-500 dark:text-gray-400">
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
          <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
            Not satisfied from above options message me directly below
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="name@email-service-provider.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Let me know how can i help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Type the message here..."
              ></textarea>
            </div>
            <Button className="w-full">Send message</Button>
          </form>
        </div>
      </section>
    </main>
  );
}
