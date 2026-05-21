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
          className="grid gap-4 rounded-lg bg-panel-soft p-5 sm:grid-cols-[8rem_1fr]"
        >
          <p className="text-lg font-semibold text-brand-amber">{item.date}</p>
          <p className="text-lg leading-7 text-panel-foreground">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
