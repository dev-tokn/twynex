const flowNodes = [
  {
    label: "US bank",
    detail: "Customer relationship",
    tone: "bg-primary text-primary-foreground",
  },
  {
    label: "Twynex",
    detail: "Routing and metadata",
    tone: "bg-accent text-accent-foreground",
  },
  {
    label: "Local partner",
    detail: "Regulated processing",
    tone: "bg-brand-red text-white",
  },
  {
    label: "Local rail",
    detail: "Merchant acceptance",
    tone: "bg-brand-amber text-foreground",
  },
];

const railTypes = ["QR", "Wallet", "Card", "NFC"];

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
    <div className="relative rounded-lg border border-border bg-card p-5 shadow-[0_24px_70px_rgba(70,53,32,0.12)]">
      <div className="grid gap-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-subtle-foreground">
              Corridor console
            </p>
            <p className="mt-1 text-lg font-semibold">US rails to local acceptance</p>
          </div>
          <span className="w-fit rounded-lg bg-accent-soft px-3 py-2 text-xs font-semibold text-accent">
            Designed for partners
          </span>
        </div>

        <div className="rounded-lg bg-muted p-5">
          <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] 2xl:items-center">
            {flowNodes.map((node, index) => (
              <div key={node.label} className="contents">
                <div className="rounded-lg border border-border bg-card p-4">
                  <div className={`grid size-12 place-items-center rounded-lg text-sm font-bold ${node.tone}`}>
                    {index + 1}
                  </div>
                  <p className="mt-4 text-base font-semibold">{node.label}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{node.detail}</p>
                </div>
                {index < flowNodes.length - 1 ? (
                  <div className="hidden h-1 w-10 rounded-full bg-accent 2xl:block" />
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-4">
            {railTypes.map((rail) => (
              <div
                key={rail}
                className="rounded-lg border border-border bg-background px-3 py-2 text-center text-xs font-semibold text-muted-foreground"
              >
                {rail}
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
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
