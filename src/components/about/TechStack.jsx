import CurrentTechStack from "@/lib/techStackData";
import Icon from "@/components/ui/Icon";

const TechStack = () => {
  return (
    <>
      <div className="my-4 flex flex-wrap items-center gap-3">
        {CurrentTechStack.map((stack) => (
          <div key={stack.key}>
            <>
              <div className="inline-flex flex-wrap transition-transform duration-200 hover:-translate-y-0.5">
                <div
                  className={`inline-flex flex-nowrap items-center gap-2 rounded-lg border border-border bg-card p-1.5 pe-3 text-foreground shadow-sm transition-shadow hover:border-primary/40 hover:shadow-md`}
                >
                  <Icon kind={stack.icon} size={stack.iconClass} />
                  <div className="whitespace-nowrap text-sm font-medium">
                    {stack.title}
                  </div>
                </div>
              </div>
            </>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
