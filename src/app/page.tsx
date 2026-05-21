import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { InfoCard } from "@/components/ui/info-card";
import { Metric } from "@/components/ui/metric";
import { CorridorConsole } from "@/components/twynex/corridor-console";
import { ProcessSteps } from "@/components/twynex/process-steps";
import {
  contact,
  faqGroups,
  flowSteps,
  metrics,
  partnerTypes,
  problemPoints,
  trustPoints,
  whatTwynexDoes,
} from "@/lib/site-content";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <SiteHeader />

      <section id="home" className="overflow-hidden border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <Reveal className="flex flex-col justify-center">
            <Eyebrow className="mb-5">Cross-border transaction orchestration</Eyebrow>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
              Globalizing America&apos;s Payment Rails
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">
              Twynex helps US banks and issuers turn familiar American payment
              relationships into local payment experiences abroad, starting with
              partner-led QR and card corridors.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#offering">Explore the offering</Button>
              <Button href="/partners" variant="secondary">
                Partner with Twynex
              </Button>
            </div>
            <div className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
              {metrics.map((metric) => (
                <Metric key={metric.label} {...metric} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <CorridorConsole />
          </Reveal>
        </div>
      </section>

      <Section id="problem" tone="sand">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow tone="red">The problem</Eyebrow>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight">
              Local payment rails are rising. American payment relationships still lose reach abroad.
            </h2>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {problemPoints.map((item) => (
              <StaggerItem key={item}>
                <InfoCard className="h-full p-5">
                  <p className="text-base leading-7 text-muted-foreground">{item}</p>
                </InfoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section id="how-it-works" tone="dark">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow tone="mint">How it works</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              A simplified corridor model for regulated partner participation.
            </h2>
            <p className="mt-5 text-lg leading-8 text-panel-muted">
              Twynex coordinates orchestration while banks, issuers, and local regulated
              partners own the applicable regulated flows.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ProcessSteps steps={flowSteps} />
          </Reveal>
        </div>
      </Section>

      <Section id="offering" tone="cream">
        <Reveal>
          <Eyebrow>What Twynex does</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
            The operating layer between US-side payment relationships and local acceptance abroad.
          </h2>
        </Reveal>
        <Stagger className="mt-9 grid gap-4 lg:grid-cols-4">
          {whatTwynexDoes.map((item) => (
            <StaggerItem key={item}>
              <InfoCard className="h-full p-5">
                <p className="text-base leading-7 text-muted-foreground">{item}</p>
              </InfoCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section id="trust" tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Eyebrow>Trust</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Designed for regulated participation from the start.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Twynex is designed around partner-led KYC, partner-owned flows where
              applicable, sensitive data in partner systems where possible, encryption,
              audit records, and payment-standard aligned messaging.
            </p>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((item) => (
              <StaggerItem key={item}>
                <InfoCard className="h-full bg-background p-5">
                  <p className="text-base font-medium leading-7">{item}</p>
                </InfoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section id="partners-preview" tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow>Who we work with</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Built for partners that want corridor reach without rebuilding every local rail.
            </h2>
            <Button href="/partners" variant="secondary" className="mt-7 inline-block">
              Explore partner models
            </Button>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {partnerTypes.map((item) => (
              <StaggerItem key={item}>
                <InfoCard className="h-full p-5">
                  <p className="text-base font-medium leading-7">{item}</p>
                </InfoCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <section id="contact" className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <Reveal className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Eyebrow tone="red">Start a conversation</Eyebrow>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
                Launch the next local payment corridor with Twynex.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                For partner, pilot, investor, or company inquiries, start with the
                payment moment, corridor, and partner role you want to explore.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/contact" variant="inverse">
                Contact Twynex
              </Button>
              <Button href={`mailto:${contact.email}`} variant="secondary">
                {contact.email}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Section id="faq" tone="cream">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight">
            Common questions about Twynex, partners, and trust.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6">
          {faqGroups.map((group) => (
            <InfoCard key={group.category} title={group.category}>
              <div className="grid gap-5">
                {group.items.map((item) => (
                  <div
                    key={item.question}
                    className="border-t border-border pt-5 first:border-t-0 first:pt-0"
                  >
                    <h3 className="text-lg font-semibold">{item.question}</h3>
                    <p className="mt-2 text-base leading-7 text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </InfoCard>
          ))}
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
