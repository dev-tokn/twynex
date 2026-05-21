export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-3">
      {steps.map((step, index) => (
        <li
          key={step}
          className="grid grid-cols-[2.5rem_1fr] items-start gap-4 rounded-lg bg-panel-soft p-4"
        >
          <span className="grid size-10 place-items-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">
            {index + 1}
          </span>
          <span className="pt-2 text-sm leading-6 text-panel-muted">{step}</span>
        </li>
      ))}
    </ol>
  );
}
