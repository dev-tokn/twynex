import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { InfoCard } from "@/components/ui/info-card";
import { Metric } from "@/components/ui/metric";
import { CorridorConsole } from "@/components/twynex/corridor-console";
import { ProcessSteps } from "@/components/twynex/process-steps";
import { Roadmap } from "@/components/twynex/roadmap";
import {
  audiencePaths,
  contact,
  flowSteps,
  metrics,
  problemPoints,
  roadmap,
  trustPoints,
  useCases,
} from "@/lib/site-content";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <SiteHeader />

      <section id="home" className="overflow-hidden border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <div className="flex flex-col justify-center">
            <Eyebrow className="mb-5">Cross-border transaction orchestration</Eyebrow>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
              Globalizing America&apos;s Payment Rails
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">
              Twynex helps US banks, issuers, and regulated partners connect
              American customers to local payment rails abroad.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:sudhir@twynex.com?subject=Twynex%20partner%20inquiry">
                Partner with Twynex
              </Button>
              <Button
                href="mailto:sudhir@twynex.com?subject=Twynex%20investor%20inquiry"
                variant="secondary"
              >
                Investor inquiry
              </Button>
            </div>
            <div className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
              {metrics.map((metric) => (
                <Metric key={metric.label} {...metric} />
              ))}
            </div>
          </div>

          <CorridorConsole />
        </div>
      </section>

      <Section id="platform" tone="sand">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow tone="red">The problem</Eyebrow>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight">
              Domestic rails are modernizing. Cross-border acceptance is still fragmented.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {problemPoints.map((item) => (
              <InfoCard key={item} className="p-5">
                <p className="text-base leading-7 text-muted-foreground">{item}</p>
              </InfoCard>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-lg bg-panel p-6 text-panel-foreground sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow tone="mint">How Twynex works</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold leading-tight">
                Orchestration between US-side relationships and destination-country rails.
              </h2>
            </div>
            <ProcessSteps steps={flowSteps} />
          </div>
        </div>
      </Section>

      <Section id="partners" tone="cream">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <Eyebrow>Audience paths</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight">
              One platform wedge, three clear routes into the market.
            </h2>
          </div>
          <Button
            href="mailto:sudhir@twynex.com?subject=Twynex%20corridor%20discussion"
            variant="secondary"
          >
            Discuss a partner corridor
          </Button>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {audiencePaths.map((path) => (
            <InfoCard key={path.label} eyebrow={path.label} title={path.title}>
              <p className="text-base leading-7 text-muted-foreground">{path.copy}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section id="use-cases" tone="sand">
        <Eyebrow tone="red">Initial use cases</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
          Start where payment acceptance is visibly local and operationally hard.
        </h2>
        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <InfoCard key={useCase.title}>
              <p className="text-sm font-semibold text-accent">{useCase.launch}</p>
              <h3 className="mt-4 text-2xl font-semibold">{useCase.title}</h3>
              <p className="mt-3 text-sm font-medium text-subtle-foreground">{useCase.markets}</p>
              <p className="mt-5 text-base leading-7 text-muted-foreground">{useCase.copy}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section id="trust" tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Eyebrow>Compliance and trust</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Designed around regulated partners, auditability, and conservative public claims.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Twynex is positioned around a partner-bank model where regulated
              partners perform KYC and operate payment accounts and flows.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((item) => (
              <InfoCard key={item} className="bg-background p-5">
                <p className="text-base font-medium leading-7">{item}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      </Section>

      <Section id="investors" tone="dark">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow tone="mint">Roadmap</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              A corridor-first path from QR payments to broader local acceptance.
            </h2>
            <p className="mt-5 text-lg leading-8 text-panel-muted">
              The investor story is a focused wedge: American payment rails
              into local international payment experiences, then repeatable
              partner corridors.
            </p>
          </div>
          <Roadmap items={roadmap} />
        </div>
      </Section>

      <section id="contact" className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Eyebrow tone="red">Start a conversation</Eyebrow>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
                Build the next cross-border payment corridor with Twynex.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                For partner, investor, or pilot inquiries, contact Sudhir Kulkarni
                and the Twynex team.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href={`mailto:${contact.email}`} variant="inverse">
                {contact.email}
              </Button>
              <Button href={contact.phoneHref} variant="secondary">
                {contact.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
