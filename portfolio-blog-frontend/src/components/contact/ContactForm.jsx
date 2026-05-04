"use client";
import { notify } from "@/lib/notificationService";
import { Button } from "@/components/ui/Button";
import React from "react";

const ContactForm = () => {
  return (
    <>
      <form
        action="#"
        className="space-y-8"
        onSubmit={(event) => {
          event.preventDefault();
          notify(new FormData(event.currentTarget));
        }}
      >
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            placeholder="name@email-service-provider.com"
            required
            aria-required="true"
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
            name="subject"
            type="text"
            id="subject"
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            placeholder="Let me know how can i help you"
            required
            aria-required="true"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            Your message
          </label>
          <textarea
            name="message"
            id="message"
            rows="6"
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            placeholder="Type the message here..."
          ></textarea>
        </div>
        <Button className="w-full">Send message</Button>
      </form>
    </>
  );
};

export default ContactForm;
