import { ArrowRight, Banknote, Building2, ClipboardList, Network } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const lanes = [
  {
    title: "US-side partner",
    detail: "Customer relationship, distribution, and applicable US-side flows",
    icon: Banknote,
  },
  {
    title: "Twynex orchestration",
    detail: "Routing, partner instructions, metadata, status, and reconciliation",
    icon: Network,
  },
  {
    title: "Destination partner",
    detail: "Local rail access, regulated processing, merchant or payout reach",
    icon: Building2,
  },
];

const controls = [
  "Partner-led KYC",
  "Audit trail",
  "FX metadata",
  "Settlement reporting",
];

export function PartnerOperatingModel() {
  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-[0_18px_50px_rgba(17,24,23,0.08)] sm:p-5">
      <div className="flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase text-subtle-foreground">
            Operating model
          </p>
          <h3 className="mt-1 text-xl font-semibold">Partner-owned flows, coordinated centrally</h3>
        </div>
        <Badge tone="accent">Corridor-by-corridor</Badge>
      </div>
      <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {lanes.map((lane, index) => (
          <div key={lane.title} className="contents">
            <div className="rounded-lg border border-border bg-background p-4">
              <div className="grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                <lane.icon className="size-5" aria-hidden="true" />
              </div>
              <p className="mt-5 text-base font-semibold">{lane.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{lane.detail}</p>
            </div>
            {index < lanes.length - 1 ? (
              <div className="hidden place-items-center text-accent lg:grid">
                <ArrowRight className="size-5" aria-hidden="true" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-border bg-muted p-4">
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-lg bg-card text-accent ring-1 ring-border">
            <ClipboardList className="size-4" aria-hidden="true" />
          </div>
          <p className="text-sm font-semibold">Control layer</p>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-4">
          {controls.map((control) => (
            <Badge key={control}>{control}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
