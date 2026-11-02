"use client";
import { notify } from "@/lib/notificationService";
import { Button } from "@/components/ui/Button";
import React, { useState } from "react";
import siteMetadata from "@/lib/metadata";
import contactData from "@/../_content/components/contact.json";

const ContactForm = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | failed

  return (
    <>
      <form
        action="#"
        className="space-y-8"
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.currentTarget;
          setStatus("sending");
          try {
            const ok = await notify(new FormData(form));
            setStatus(ok ? "sent" : "failed");
            if (ok) form.reset();
          } catch {
            setStatus("failed");
          }
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
            className="focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary block w-full rounded-lg border border-border bg-card p-2.5 text-sm text-gray-900 shadow-sm  dark:text-white dark:placeholder-gray-400"
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
            className="focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary block w-full rounded-lg border border-border bg-card p-3 text-sm text-gray-900 shadow-sm  dark:text-white dark:placeholder-gray-400"
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
            className="focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary block w-full rounded-lg border border-border bg-card p-2.5 text-sm text-gray-900 shadow-sm  dark:text-white dark:placeholder-gray-400"
            placeholder={contactData.form.messagePlaceholder}
          ></textarea>
        </div>
        <Button className="w-full" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : contactData.form.submitButton}
        </Button>
        <div aria-live="polite" className="text-center text-sm">
          {status === "sent" && (
            <p className="text-emerald-700 dark:text-emerald-400">
              Thanks, your message is on its way. I&apos;ll get back to you soon.
            </p>
          )}
          {status === "failed" && (
            <p className="text-foreground/80">
              I couldn&apos;t send that just now. Please email me directly at{" "}
              <a className="text-primary underline" href={`mailto:${siteMetadata.email}`}>
                {siteMetadata.email}
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default ContactForm;
