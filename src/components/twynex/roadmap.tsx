export function Roadmap({
  items,
}: {
  items: Array<{ date: string; label: string }>;
}) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <div
          key={item.date}
          className="grid gap-4 rounded-lg bg-white/8 p-5 dark:bg-white/10 sm:grid-cols-[8rem_1fr]"
        >
          <p className="text-lg font-semibold text-[#f1c36d]">{item.date}</p>
          <p className="text-lg leading-7 text-[#fffaf2]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
