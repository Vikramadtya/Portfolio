import Oracle from "@/public/assets/company/oracle.png";
import Cisco from "@/public/assets/company/cisco.png";
import Securonix from "@/public/assets/company/securonix.png";
import Image from "next/image";
import React from "react";

const workData = [
  {
    duration: "April 2025 - Present",
    companyLogo: Oracle,
    role: "Senior Member of Technical Staff, Oracle",
    bullets: [
      "Designed and developed an event-driven microservice that ingests clinical-data changes and generates safety-critical advisories.",
      "Designed and implemented a low-latency notification microservice enabling automatic data refresh for the Patient List UI.",
      "Created a reusable microservice scaffolding template and shared integration framework for the platform's clinical-data layer, decreasing new-service setup time by 30%.",
      "Designed and implemented the core Patient List and Patient Detail APIs, then improved their performance by 60% through query optimization and caching.",
      "Converted multiple OpenSearch queries to SQL for the Oracle ATP database, improving performance by 12%.",
      "Owned OCI CI/CD pipelines for the Patient Advisory, Patient List, Care Notification, and Consult microservices, and built Grafana dashboards and alerts for proactive issue detection.",
      "Implemented 5+ FHIR clinical concepts into data models and onboarded them in the EHRC framework; built an asynchronous PDF generation service and a data migration module from Gen 1 to Gen 2 EHRC.",
      "Designed an MCP service and reusable framework using FastMCP, and applied Spec-Driven Development to build the consult microservice, reducing development time by 40%.",
    ],
  },
  {
    duration: "Aug 2021 - April 2025",
    companyLogo: Cisco,
    role: "Software Engineer III, Cisco",
    bullets: [
      "Architected and scaled the backend for the Policy Analyser and Optimiser (PAO) platform from the ground up, enabling analysis across 300+ cloud firewall configurations.",
      "Built a pub/sub framework on AWS SQS/SNS that delivered real-time analysis updates across 4+ downstream services.",
      "Reduced FMC device listing and management page load time by 96% through pagination, caching and query optimization.",
      "Cut Intrusion Prevention System (IPS) and Network Analysis Policy (NAP) snapshot creation time by 70%, accelerating policy deployment to firewalls.",
      "Led backend development for the Zero Trust network access policy feature, including certificate auto-enrollment that reduced device onboarding time by 25%.",
      "Extended FMC's API for Snort3 rule querying against the MITRE framework, and delivered Elephant Flow Detection and Threat Detection end to end.",
      "Owned CI/CD pipeline automation and built Datadog dashboards with proactive alerting, reducing incident detection time by 70%.",
    ],
  },
  {
    duration: "Aug 2020 - Apr 2021 | 9 months",
    companyLogo: Securonix,
    role: "SDE Intern, Securonix",
    bullets: [
      "Developed an email microservice and automated incident report generation using Spring Framework and Jasper Reports.",
    ],
  },
  {
    duration: "May 2020 - Jul 2020 | 3 months",
    companyLogo: Cisco,
    role: "SDE Intern, Cisco",
    bullets: [
      "Developed a gRPC detector for Snort 2.9.16 and integrated it with FTD to enable alert generation.",
      "Contributed to the preprocessor framework for scanning message content transferred via gRPC for malicious payloads.",
    ],
  },
];

const WorkHistory = () => {
  return (
    <div className="pb-5 pt-10">
      {workData.map((job, index) => (
        <React.Fragment key={index}>
          <div className="my-2 ps-2 first:mt-0">
            <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-100">
              {job.duration}
            </h3>
          </div>
          <div className="flex gap-x-3">
            <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 last:after:hidden dark:after:bg-gray-700">
              <div className="relative z-10 flex size-7 items-center justify-center">
                <Image
                  className="mt-1 flex size-4 h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[10px] font-semibold uppercase text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                  src={job.companyLogo}
                  alt={`${job.role} logo`}
                />
              </div>
            </div>
            <div className="grow pb-8 pt-0.5">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                {job.role}
              </h3>
              <ul className="w-full list-disc ps-5 text-sm text-gray-600 marker:text-primary dark:text-gray-100 mt-2">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default WorkHistory;
