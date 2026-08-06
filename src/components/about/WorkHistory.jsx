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
    bullets: ["Shh... its hidden for now 🤫"],
  },
  {
    duration: "Oct 2024 - April 2025",
    companyLogo: Cisco,
    role: "Software Engineer III, Cisco",
    bullets: [
      "Improved the NAP & IPS policy snapshot performance reducing the operation time by 70%, which in turn reduced the time to deploy the configuration to the devices from the FMC.",
      "Designed & implemented the Zero trust policy on FMC which is a key feature of the product. Implemented the complete backend which included changes in the API, global search, database, service & model layer, various validations, reporting, audit & telemetery.",
      "Implemented the changes needed for deploying the Zero Trust policy to the device. Added the Snort3 configuration creation & handled the Lina CLI generation by enhancing the parser with multiple new commands.",
      "Added ability to auto-enroll the certificate selected within the Zero trust policy onto the device which greatly enhanced the user experience.",
    ],
  },
  {
    duration: "Oct 2022 - SEP 2024",
    companyLogo: Cisco,
    role: "Software Engineer II, Cisco",
    bullets: [
      "Improved the NAP & IPS policy snapshot performance reducing the operation time by 70%, which in turn reduced the time to deploy the configuration to the devices from the FMC.",
      "Designed & implemented the Zero trust policy on FMC which is a key feature of the product. Implemented the complete backend which included changes in the API, global search, database, service & model layer, various validations, reporting, audit & telemetery.",
      "Implemented the changes needed for deploying the Zero Trust policy to the device. Added the Snort3 configuration creation & handled the Lina CLI generation by enhancing the parser with multiple new commands.",
      "Added ability to auto-enroll the certificate selected within the Zero trust policy onto the device which greatly enhanced the user experience.",
    ],
  },
  {
    duration: "Aug 2021 - Sep 2022",
    companyLogo: Cisco,
    role: "Software Engineer I, Cisco",
    bullets: [
      "Improved the Firepower management console’s device listing & management page performance, reduced the page load time by 96%.",
      "Added Elephant Flow Detection feature to the Access Policy by implementing the complete backend which included changes in the database schema, validations, models & service layer. Also did changes for deploying the configuration to the Lina & Snort3 on the device.",
      "Added pdf reporting, audit log, delta preview, telemetry functionality for the Elephant Flow Detection & Threat Detection Setting feature.",
      "Implemented dynamic warning framework for the device upgrade flow on the FMC using React.",
    ],
  },
  {
    duration: "Aug 2020 - Apr 2021 | 9 months",
    companyLogo: Securonix,
    role: "Engineering Intern, Securonix",
    bullets: [
      "Worked with spring framework on email microservice and automatic incident report creation using jasper report.",
      "Wrote python scripts for automating querying and updating databases.",
      "Automated report creation for analysis from the data for CTA team.",
    ],
  },
  {
    duration: "May 2020 - Jul 2020 | 3 months",
    companyLogo: Cisco,
    role: "Engineering Intern, Cisco",
    bullets: [
      "Worked on Snort 2.9.16 & developed a gRPC detector and integrated it with the FMC console to enable generation of alerts.",
      "Worked on the preprocessor framework for scanning the message content transferred via. gRPC for malicious payloads.",
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
              <ul className="w-full list-disc ps-5 text-sm text-gray-600 marker:text-blue-600 dark:text-gray-100 mt-2">
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
