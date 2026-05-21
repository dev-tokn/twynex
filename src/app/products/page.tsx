import {
  BadgeDollarSign,
  Building2,
  CreditCard,
  Landmark,
  Nfc,
  QrCode,
  WalletCards,
} from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/layout/section";
import { MotionCard } from "@/components/motion/motion-card";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { InfoCard } from "@/components/ui/info-card";
import { initialFocus, serviceModules } from "@/lib/site-content";

const moduleVisuals = [
  { icon: QrCode, label: "Merchant QR", rail: "Initial focus" },
  { icon: CreditCard, label: "Travel card", rail: "Initial focus" },
  { icon: BadgeDollarSign, label: "Bills", rail: "Planned module" },
  { icon: WalletCards, label: "Wallets", rail: "Configurable" },
  { icon: Nfc, label: "Transit", rail: "Configurable" },
  { icon: Building2, label: "Merchants", rail: "Partner-led" },
];

export default function ProductsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-surface text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(135deg,rgb(8_120_101_/_10%),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <Reveal className="max-w-4xl">
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge tone="accent">Products</Badge>
              <Badge>Initial focus: QR and cards</Badge>
            </div>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.04] sm:text-6xl">
              Corridor products for local payment acceptance abroad.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">
              Twynex starts where local acceptance is visible, frequent, and
              operationally hard: QR payments abroad and partner-led cards for
              international business use.
            </p>
          </Reveal>
        </div>
      </section>

      <Section tone="cream">
        <Reveal>
          <Eyebrow tone="red">Service modules</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
            Modular payment experiences, coordinated through one partner-led orchestration model.
          </h2>
        </Reveal>
        <Stagger className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {serviceModules.map((module, index) => {
            const visual = moduleVisuals[index] ?? {
              icon: Landmark,
              label: "Module",
              rail: "Partner-led",
            };
            const Icon = visual.icon;

            return (
              <StaggerItem key={module.title}>
                <MotionCard
                  className={`h-full ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
                >
                  <article
                    className={`flex h-full flex-col rounded-lg border bg-card p-5 text-card-foreground shadow-sm ${
                      index < 2 ? "border-accent/35" : "border-border"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`grid size-11 place-items-center rounded-lg ${
                          index < 2
                            ? "bg-accent text-accent-foreground"
                            : "bg-primary text-primary-foreground"
                        }`}
                      >
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <Badge tone={index < 2 ? "accent" : "neutral"}>{visual.rail}</Badge>
                    </div>
                    <div className="mt-7 flex flex-1 flex-col">
                      <p className="text-xs font-semibold uppercase text-accent">
                        {visual.label}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold leading-tight">
                        {module.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-muted-foreground">
                        {module.copy}
                      </p>
                    </div>
                  </article>
                </MotionCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <Section tone="sand">
        <Reveal>
          <Eyebrow tone="red">Initial focus</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
            Start with concrete payment moments, then expand by rail and country.
          </h2>
        </Reveal>
        <Stagger className="mt-9 grid gap-4 lg:grid-cols-2">
          {initialFocus.map((useCase) => (
            <StaggerItem key={useCase.title}>
              <InfoCard className="h-full">
                <p className="text-sm font-semibold text-accent">{useCase.launch}</p>
                <h3 className="mt-4 text-2xl font-semibold">{useCase.title}</h3>
                <p className="mt-3 text-sm font-medium text-subtle-foreground">
                  {useCase.markets}
                </p>
                <p className="mt-5 text-base leading-7 text-muted-foreground">
                  {useCase.copy}
                </p>
              </InfoCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Eyebrow tone="red">Partner-led launches</Eyebrow>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
                Discuss a corridor product configuration for your partner model.
              </h2>
            </div>
            <Button href="/contact?inquiry=pilot" variant="inverse">
              Contact Twynex
            </Button>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
