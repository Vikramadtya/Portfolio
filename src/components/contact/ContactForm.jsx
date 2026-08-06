"use client";
import { notify } from "@/lib/notificationService";
import { Button } from "@/components/ui/Button";
import React from "react";
import contactData from "@/../_content/components/contact.json";

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
            {contactData.form.emailLabel}
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            placeholder={contactData.form.emailPlaceholder}
            required
            aria-required="true"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {contactData.form.subjectLabel}
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            placeholder={contactData.form.subjectPlaceholder}
            required
            aria-required="true"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            {contactData.form.messageLabel}
          </label>
          <textarea
            name="message"
            id="message"
            rows="6"
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            placeholder={contactData.form.messagePlaceholder}
          ></textarea>
        </div>
        <Button className="w-full">{contactData.form.submitButton}</Button>
      </form>
    </>
  );
};

export default ContactForm;
