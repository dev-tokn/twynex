export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-3">
      {steps.map((step, index) => (
        <li
          key={step}
          className="grid grid-cols-[2.5rem_1fr] items-start gap-4 rounded-lg bg-white/8 p-4"
        >
          <span className="grid size-10 place-items-center rounded-lg bg-[#0d7c66] text-sm font-bold">
            {index + 1}
          </span>
          <span className="pt-2 text-sm leading-6 text-[#f5efe6]">{step}</span>
        </li>
      ))}
    </ol>
  );
}
