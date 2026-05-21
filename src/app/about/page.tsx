import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Eyebrow } from "@/components/ui/eyebrow";
import { InfoCard } from "@/components/ui/info-card";

const team = [
  "Sudhir Kulkarni",
  "Alok Arora",
  "Bipin Sahni",
  "Jagdeep Singh Sahota",
  "David Black",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <SiteHeader />
      <Section tone="cream">
        <Reveal>
          <Eyebrow>About Twynex</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] sm:text-6xl">
            Globalizing American payment rails through corridor-first execution.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">
            Twynex is focused on connecting US-side payment relationships to local
            rails abroad through regulated partners and practical service modules.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <InfoCard title="Mission">
            <p className="text-base leading-7 text-muted-foreground">
              Globalize American payment rails by connecting US-side payment
              relationships to local rails abroad.
            </p>
          </InfoCard>
          <InfoCard title="Why now">
            <p className="text-base leading-7 text-muted-foreground">
              Domestic payment modernization and local rail adoption abroad are
              increasing while cross-border local acceptance remains fragmented.
            </p>
          </InfoCard>
          <InfoCard title="Company focus">
            <p className="text-base leading-7 text-muted-foreground">
              Corridor-first execution, a regulated partner model, and service
              modules that solve real payment utility gaps.
            </p>
          </InfoCard>
        </div>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member) => (
            <StaggerItem key={member}>
              <InfoCard className="h-full p-5">
                <p className="text-base font-semibold">{member}</p>
              </InfoCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      <SiteFooter />
    </main>
  );
}
