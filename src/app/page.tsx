import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { MotionCard } from "@/components/motion/motion-card";
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
  initialFocus,
  metrics,
  partnerTypes,
  problemPoints,
  serviceModules,
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
              Twynex helps US banks, issuers, and regulated partners connect
              American customers to local payment rails abroad.
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
              Domestic rails are modernizing. Cross-border acceptance remains fragmented.
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

      <Section id="offering" tone="cream">
        <Reveal>
          <Eyebrow>What Twynex does</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
            American payment relationships into local international payment experiences.
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

        <div className="mt-14">
          <Reveal>
            <Eyebrow tone="red">Service modules</Eyebrow>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
              Product lines stay inside one partner-led orchestration offering.
            </h2>
          </Reveal>
          <Stagger className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceModules.map((module) => (
              <StaggerItem key={module.title}>
                <MotionCard className="h-full">
                  <InfoCard className="h-full" title={module.title}>
                    <p className="text-base leading-7 text-muted-foreground">{module.copy}</p>
                  </InfoCard>
                </MotionCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <Section id="trust" tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Eyebrow>Trust</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              A regulated-partner posture for corridor payments.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Twynex is designed around partner-bank participation, auditability, and
              conservative compliance language pending legal review.
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

      <Section id="focus" tone="sand">
        <Reveal>
          <Eyebrow tone="red">Initial focus</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
            Start where local acceptance is visible, frequent, and operationally hard.
          </h2>
        </Reveal>
        <Stagger className="mt-9 grid gap-4 lg:grid-cols-2">
          {initialFocus.map((useCase) => (
            <StaggerItem key={useCase.title}>
              <InfoCard className="h-full">
                <p className="text-sm font-semibold text-accent">{useCase.launch}</p>
                <h3 className="mt-4 text-2xl font-semibold">{useCase.title}</h3>
                <p className="mt-3 text-sm font-medium text-subtle-foreground">{useCase.markets}</p>
                <p className="mt-5 text-base leading-7 text-muted-foreground">{useCase.copy}</p>
              </InfoCard>
            </StaggerItem>
          ))}
        </Stagger>
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

      <Section id="partners-preview" tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow>Who we work with</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Built for banks, issuers, and regulated partners that want corridor reach.
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
                Build the next cross-border payment corridor with Twynex.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                For partner, pilot, investor, or company inquiries, contact Sudhir
                Kulkarni and the Twynex team.
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
