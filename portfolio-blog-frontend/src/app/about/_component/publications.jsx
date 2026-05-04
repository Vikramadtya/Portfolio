import Link from "next/link";
import Image from "next/image";
import FirstPublication from "@/public/assets/publications/first_publication.webp";

const certifications = [
  {
    key: 1,
    icon: "first_publication",
    heading:
      "Inception Time Model for Structural Damage Detection Using Vibration Measurements\n",
    subHeading: "Springer, Singapore, 31 March 2024",
    credential: "10.1007/978-981-99-9040-5_7",
    credential_link:
      "https://link.springer.com/chapter/10.1007/978-981-99-9040-5_7",
    description: "In book: Fourth Congress on Intelligent Systems (pp.103-122)",
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
          <Image src={FirstPublication} alt={""} className="h-14 w-10" />
          <div className="flex flex-col gap-1">
            <div className="text-base">{certification.heading}</div>
            <div className="text-sm">{certification.description}</div>
            <div className="text-sm">{certification.subHeading}</div>

            {certification.credential !== undefined ? (
              <Link href={certification.credential_link}>
                <div className="text-sm text-blue-600">
                  DOI:{" "}
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
