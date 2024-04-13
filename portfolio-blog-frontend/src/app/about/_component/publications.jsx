import Icon from "@/components/atom/icon";

const certifications = [
  {
    icon: "first_publication",
    heading:
      "Inception Time Model for Structural Damage Detection Using Vibration Measurements\n",
    subHeading: "Springer, Singapore, 31 March 2024",
    description: "DOI:10.1007/978-981-99-9040-5_7",
  },
];

const Courses = () => {
  return (
    <>
      {certifications.map((certification) => (
        <div className="mt-5 flex flex-row items-center gap-8 align-middle">
          <Icon kind={certification.icon} size="h-12 w-12" />
          <div className="flex flex-col gap-1">
            <div className="text-base">{certification.heading}</div>
            <div className="text-sm">{certification.subHeading}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Courses;
