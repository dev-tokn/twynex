export function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-sm leading-5 text-[#6f665b] dark:text-[#a8b4c5]">{label}</p>
    </div>
  );
}
