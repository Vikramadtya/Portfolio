import Icon from "@/components/atom/icon";

const TechStackBadge = ({ name, icon, iconClass }) => {
  return (
    <>
      <div className="inline-flex flex-wrap gap-2">
        <div className="inline-flex flex-nowrap items-center rounded-lg	 border border-gray-200 bg-white p-1.5 pe-3">
          <Icon kind={icon} size={iconClass} />
          <div className="whitespace-nowrap pl-5 text-sm font-medium text-gray-800">
            {name}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStackBadge;
