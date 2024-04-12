import CurrentTechStack from "@/lib/currentTechStack";
import TechStackBadge from "@/components/atom/techStackBadge";
const TechStack = () => {
  return (
    <>
      <div className="my-4 flex flex-wrap items-center gap-3">
        {CurrentTechStack.map((stack) => (
          <div key={stack.key}>
            <TechStackBadge
              name={stack.title}
              icon={stack.icon}
              iconClass={stack.iconClass}
              index={stack.key}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
