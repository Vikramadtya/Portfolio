import CurrentTechStack from "@/lib/currentTechStack";
import Icon from "@/components/atom/icon";

const color = {
  0: "bg-indigo-500 text-white",
  1: "bg-lime-500 text-white",
  2: "bg-gray-500 text-white",
  3: "bg-teal-500 text-white",
  4: "bg-blue-600 text-white",
  5: "bg-red-500 text-white",
  6: "bg-yellow-500 text-white",
};

const TechStack = () => {
  return (
    <>
      <div className="my-4 flex flex-wrap items-center gap-3">
        {CurrentTechStack.map((stack) => (
          <div key={stack.key}>
            <>
              <div className="inline-flex flex-wrap hover:scale-110">
                <div
                  className={`inline-flex flex-nowrap items-center gap-2 rounded-lg border border-gray-200 p-1.5 pe-3 ${color[stack.key % 7]}`}
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
