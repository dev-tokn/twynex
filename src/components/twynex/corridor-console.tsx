function RailNode({
  className,
  label,
  tone,
  large = false,
}: {
  className: string;
  label: string;
  tone: string;
  large?: boolean;
}) {
  return (
    <div className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 ${className}`}>
      <span className={`${large ? "size-20" : "size-14"} rounded-lg ${tone} shadow-lg`} />
      <span className="max-w-24 text-center text-xs font-semibold text-muted-foreground">{label}</span>
    </div>
  );
}

function Status({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-card p-3">
      <p className="text-xs font-semibold uppercase text-subtle-foreground">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}

function MiniPanel({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <p className="text-xs font-semibold uppercase text-subtle-foreground">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6">{value}</p>
    </div>
  );
}

export function CorridorConsole() {
  return (
    <div className="relative min-h-[520px] rounded-lg border border-border bg-card p-5 shadow-[0_24px_70px_rgba(70,53,32,0.12)]">
      <div className="absolute inset-x-8 top-8 h-px bg-border" />
      <div className="grid h-full grid-rows-[auto_1fr_auto] gap-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-subtle-foreground">
              Corridor console
            </p>
            <p className="mt-1 text-lg font-semibold">US rails to local acceptance</p>
          </div>
          <span className="rounded-lg bg-accent-soft px-3 py-2 text-xs font-semibold text-accent">
            Designed for partners
          </span>
        </div>

        <div className="relative grid place-items-center overflow-hidden rounded-lg bg-muted p-5">
          <div className="absolute left-8 right-8 top-1/2 h-2 -translate-y-1/2 rounded-full bg-rail-track" />
          <div className="absolute left-[22%] top-1/2 h-2 w-[56%] -translate-y-1/2 rounded-full bg-accent" />
          <RailNode className="left-[16%] top-[43%]" label="US bank" tone="bg-primary" />
          <RailNode className="left-[40%] top-[23%]" label="Twynex" tone="bg-accent" large />
          <RailNode className="right-[20%] top-[43%]" label="Local partner" tone="bg-brand-red" />
          <RailNode className="right-[16%] top-[67%]" label="QR wallet card NFC" tone="bg-brand-amber" />
          <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
            <Status label="Routing" value="Partner-led" />
            <Status label="Data" value="Audit trail" />
            <Status label="Rails" value="Local finish" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <MiniPanel label="Customer experience" value="Pay abroad from a familiar US relationship" />
          <MiniPanel label="Merchant outcome" value="Receive through local payment rails" />
        </div>
      </div>
    </div>
  );
}
