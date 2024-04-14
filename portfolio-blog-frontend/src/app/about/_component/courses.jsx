import Icon from "@/components/atom/icon";
import Link from "next/link";

const certifications = [
  {
    key: 1,
    icon: "guvi",
    heading: "Deep Learning",
    subHeading: "GUVI Geek Networks, IITM Research Park",
    credential: "86289G7EXytf691157",
    credential_href: "https://www.guvi.in/certificate?id=86289G7EXytf691157",
  },
  {
    key: 2,
    icon: "padhai",
    heading: "Foundations of Data Science",
    subHeading: "PadhAI - One Fourth Labs",
    credential: "ldwonx1zcq",
    credential_href: "https://padhai.onefourthlabs.in/certificates/ldwonx1zcq",
  },
  {
    key: 3,
    icon: "simplilearn",
    heading: "Core Java",
    subHeading: "Simplilearn",
    credential: "2715785",
    credential_href: "https://certificates.simplicdn.net/share/2715785.pdf",
  },
  {
    key: 4,
    icon: "simplilearn",
    heading: "C and Data Structures",
    subHeading: "Simplilearn",
    credential: "2707432",
    credential_href: "https://certificates.simplicdn.net/share/2707432.pdf",
  },
  {
    key: 5,
    icon: "simplilearn",
    heading: "Python Training Certification Course",
    subHeading: "Simplilearn",
    credential: "2792283",
    credential_href: "https://certificates.simplicdn.net/share/2792283.pdf",
  },
  {
    key: 6,
    icon: "simplilearn",
    heading: "Java Certification course",
    subHeading: "Simplilearn",
    credential: "2772792",
    credential_href: "https://certificates.simplicdn.net/share/2772792.pdf",
  },
  {
    key: 7,
    icon: "simplilearn",
    heading: "Data Science with Python",
    subHeading: "Simplilearn",
    credential: "2834404",
    credential_href: "https://certificates.simplicdn.net/share/2834404.pdf",
  },
];

const Courses = () => {
  return (
    <>
      {certifications.map((certification) => (
        <div
          key={certification.key}
          className="mt-5 flex flex-row items-center gap-8 align-middle"
        >
          <Icon kind={certification.icon} size="h-12 w-12" />
          <div className="flex flex-col gap-1">
            <div className="text-base">{certification.heading}</div>
            <div className="text-sm">{certification.subHeading}</div>
            {certification.credential !== undefined ? (
              <Link href={certification.credential_href}>
                <div className="text-sm text-blue-600">
                  Credential ID{" "}
                  <span className="lowercase">{certification.credential}</span>
                </div>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Courses;
