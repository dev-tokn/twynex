import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { InfoCard } from "@/components/ui/info-card";
import { PartnerOperatingModel } from "@/components/twynex/partner-operating-model";
import { ProcessSteps } from "@/components/twynex/process-steps";
import {
  partnerEconomics,
  partnerFaqPreview,
  partnerOutcomes,
  partnerRoles,
  partnerSteps,
} from "@/lib/site-content";

export default function PartnersPage() {
  return (
    <main id="main-content" className="min-h-screen bg-surface text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(135deg,rgb(8_120_101_/_10%),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <Reveal className="max-w-4xl">
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge tone="accent">Partner corridors</Badge>
              <Badge>US-side to destination-side operating model</Badge>
            </div>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.04] sm:text-6xl">
              Launch local payment corridors without rebuilding every rail from scratch.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">
              Twynex helps regulated partners extend American payment relationships
              into local payment experiences abroad through corridor-specific routing,
              reporting, reconciliation, and partner coordination.
            </p>
            <Button href="/contact?inquiry=partner" className="mt-9 inline-block">
              Discuss a partner corridor
            </Button>
          </Reveal>
        </div>
      </section>

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Eyebrow tone="red">Partner outcomes</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Keep customers active abroad while creating new corridor economics.
            </h2>
          </Reveal>
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {partnerOutcomes.map((outcome) => (
              <StaggerItem key={outcome}>
                <div className="h-full rounded-lg border border-border bg-card p-5 shadow-sm">
                  <p className="text-base leading-7 text-muted-foreground">{outcome}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <Eyebrow>Partner role matrix</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Clear responsibilities across US-side, destination-side, and orchestration roles.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Twynex is positioned as the corridor operating layer while regulated
              partners retain ownership of applicable financial flows.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <PartnerOperatingModel />
          </Reveal>
        </div>
        <Stagger className="mt-8 grid gap-3 lg:grid-cols-5">
          {partnerRoles.map((item, index) => (
            <StaggerItem key={item.role}>
              <div
                className={`h-full rounded-lg border bg-card p-4 shadow-sm ${
                  index === partnerRoles.length - 1 ? "border-accent/40" : "border-border"
                }`}
              >
                <p className="text-base font-semibold">{item.role}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="dark">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow tone="mint">How it works for partners</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Start with one payment moment, then expand by rail, country, and service module.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ProcessSteps steps={partnerSteps} />
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-3">
          <Reveal>
            <Eyebrow>Operating model</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">
              Designed around regulated partner ownership where applicable.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              KYC is performed by partner banks or regulated partners. Payment flows
              move through partner-owned accounts where applicable, and sensitive data
              remains in partner systems where possible. Twynex coordinates the
              operating layer around those partner responsibilities.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <InfoCard className="h-full" title="Partner economics">
              <ul className="grid gap-3 text-base leading-7 text-muted-foreground">
                {partnerEconomics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoCard>
          </Reveal>
          <Reveal delay={0.12}>
            <InfoCard className="h-full" title="Integration and reporting">
              <p className="text-base leading-7 text-muted-foreground">
                API or embedded partner flows can support routing, local rail
                connectivity, transaction status, reconciliation, settlement reporting,
                audit trails, and proof of provenance.
              </p>
            </InfoCard>
          </Reveal>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Eyebrow tone="red">Partner FAQ preview</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              The right corridor discussion starts with ownership, rails, and operations.
            </h2>
            <Button href="/#faq" variant="secondary" className="mt-7 inline-block">
              Read FAQ
            </Button>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {partnerFaqPreview.map((item) => (
              <StaggerItem key={item}>
                <InfoCard className="h-full p-5">
                  <p className="text-base font-medium leading-7">{item}</p>
                </InfoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Eyebrow tone="red">Start a corridor discussion</Eyebrow>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
                Bring Twynex a customer moment, a corridor, or a partner role.
              </h2>
            </div>
            <Button href="/contact?inquiry=partner" variant="inverse">
              Contact Twynex
            </Button>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
