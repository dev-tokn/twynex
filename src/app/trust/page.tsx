import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Eyebrow } from "@/components/ui/eyebrow";
import { InfoCard } from "@/components/ui/info-card";
import { trustPoints } from "@/lib/site-content";

export default function TrustPage() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <SiteHeader />
      <Section tone="cream">
        <Reveal>
          <Eyebrow>Trust</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] sm:text-6xl">
            A regulated-partner posture for corridor payments.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">
            Twynex is designed around partner-bank participation, auditability, and
            conservative compliance language pending legal review.
          </p>
        </Reveal>
        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <StaggerItem key={point}>
              <InfoCard className="h-full p-5">
                <p className="text-base leading-7 text-muted-foreground">{point}</p>
              </InfoCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      <SiteFooter />
    </main>
  );
}
