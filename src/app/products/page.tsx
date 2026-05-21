import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { InfoCard } from "@/components/ui/info-card";
import { initialFocus } from "@/lib/site-content";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <SiteHeader />

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <Reveal className="max-w-4xl">
            <Eyebrow>Products</Eyebrow>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.04] sm:text-6xl">
              Initial product focus for local payment acceptance abroad.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">
              Twynex starts where local acceptance is visible, frequent, and
              operationally hard: QR payments abroad and local cards for business travelers.
            </p>
          </Reveal>
        </div>
      </section>

      <Section tone="sand">
        <Reveal>
          <Eyebrow tone="red">Initial focus</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
            Product modules designed for corridor-first partner launches.
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
                Discuss a corridor product configuration with Twynex.
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
