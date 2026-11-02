const colors = {
  0: "border-primary/30 bg-primary/10 text-primary",
  1: "border-primary/30 bg-primary/10 text-primary",
  2: "border-stone-400/50 bg-stone-500/10 text-stone-700 dark:text-stone-300",
  3: "border-rose-400/40 bg-rose-500/10 text-rose-800 dark:text-rose-300",
  4: "border-emerald-500/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300",
  5: "border-amber-500/40 bg-amber-500/10 text-amber-800 dark:text-amber-300",
  6: "border-sky-500/40 bg-sky-500/10 text-sky-800 dark:text-sky-300",
  7: "border-violet-400/40 bg-violet-500/10 text-violet-800 dark:text-violet-300",
  8: "border-orange-400/40 bg-orange-500/10 text-orange-800 dark:text-orange-300",
};

const Tag = ({ text, id }) => {
  let color = colors[id];
  return (
    <span
      className={`me-2 rounded-full border ${color} px-2.5 py-0.5 text-xs font-medium transition-colors hover:bg-primary/20 `}
    >
      <span>{text.split(" ").join("-")}</span>
    </span>
  );
};

export default Tag;
