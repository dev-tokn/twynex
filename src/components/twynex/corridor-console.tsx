import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Landmark,
  MapPinned,
  QrCode,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const flowNodes = [
  {
    label: "US bank",
    detail: "Customer relationship",
    marker: "bg-primary text-primary-foreground",
    icon: Landmark,
  },
  {
    label: "Twynex",
    detail: "Routing and metadata",
    marker: "bg-accent text-accent-foreground",
    icon: MapPinned,
  },
  {
    label: "Local partner",
    detail: "Regulated processing",
    marker: "bg-brand-red text-white",
    icon: ClipboardCheck,
  },
  {
    label: "Local rail",
    detail: "Merchant acceptance",
    marker: "bg-brand-amber text-foreground",
    icon: Building2,
  },
];

const railTypes = [
  { label: "QR", active: true },
  { label: "Wallet", active: true },
  { label: "Card", active: true },
  { label: "NFC", active: false },
];

function Status({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.06] p-3">
      <p className="text-xs font-semibold uppercase text-subtle-foreground">{label}</p>
      <p className="mt-1 text-sm font-semibold text-panel-foreground">{value}</p>
    </div>
  );
}

function MiniPanel({
  label,
  value,
  emphasis = false,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        emphasis
          ? "border-accent/40 bg-accent-soft text-foreground"
          : "border-border bg-card"
      }`}
    >
      <p className="text-xs font-semibold uppercase text-subtle-foreground">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6">{value}</p>
    </div>
  );
}

export function CorridorConsole() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-panel text-panel-foreground shadow-[0_28px_90px_rgba(17,24,23,0.22)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgb(255_255_255_/_9%),transparent_34%),radial-gradient(circle_at_80%_0%,rgb(125_215_195_/_18%),transparent_30%)]" />
      <div className="relative border-b border-white/10 px-4 py-3 sm:px-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-lg bg-white text-panel">
              <QrCode className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-panel-muted">
                Corridor console
              </p>
              <p className="mt-1 text-lg font-semibold">US rails to local acceptance</p>
            </div>
          </div>
          <Badge tone="dark" className="gap-2">
            <span className="size-2 rounded-full bg-accent" />
            Partner-designed corridor
          </Badge>
        </div>
      </div>

      <div className="relative grid gap-5 p-4 sm:p-5">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 sm:p-5">
          <div className="mb-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/10 p-3">
              <p className="text-xs font-semibold uppercase text-panel-muted">Active corridor</p>
              <p className="mt-1 text-sm font-semibold">US customer to local merchant</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/10 p-3">
              <p className="text-xs font-semibold uppercase text-panel-muted">Primary moment</p>
              <p className="mt-1 text-sm font-semibold">QR acceptance abroad</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/10 p-3">
              <p className="text-xs font-semibold uppercase text-panel-muted">Control posture</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
                <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
                Partner-led
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
            {flowNodes.map((node, index) => (
              <div key={node.label} className="contents">
                <div className="rounded-lg border border-white/10 bg-panel p-4 shadow-[inset_0_1px_0_rgb(255_255_255_/_6%)]">
                  <div className={`grid size-11 place-items-center rounded-lg ${node.marker}`}>
                    <node.icon className="size-5" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-base font-semibold">{node.label}</p>
                  <p className="mt-1 text-sm leading-6 text-panel-muted">{node.detail}</p>
                </div>
                {index < flowNodes.length - 1 ? (
                  <div className="hidden size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-accent lg:grid">
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-2 sm:grid-cols-4">
            {railTypes.map((rail) => (
              <div
                key={rail.label}
                className={`rounded-lg border px-3 py-2 text-center text-xs font-semibold ${
                  rail.active
                    ? "border-accent/40 bg-accent/10 text-brand-mint"
                    : "border-white/10 bg-white/[0.05] text-panel-muted"
                }`}
              >
                {rail.label}
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <Status label="Routing" value="Partner-led" />
            <Status label="Data" value="Audit trail" />
            <Status label="Rails" value="Local finish" />
          </div>

          <div className="mt-4 flex flex-col gap-3 rounded-lg border border-white/10 bg-black/10 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase text-panel-muted">Latest status</p>
              <p className="mt-1 text-sm font-semibold">
                Partner instructions, rail status, and reconciliation record returned
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-mint">
              <CheckCircle2 className="size-4" aria-hidden="true" />
              Matched
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-[1fr_1fr]">
          <MiniPanel
            label="Customer experience"
            value="Pay abroad from a familiar US relationship"
            emphasis
          />
          <MiniPanel label="Merchant outcome" value="Receive through local payment rails" />
        </div>
      </div>
    </div>
  );
}
