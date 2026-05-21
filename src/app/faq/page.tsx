import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { InfoCard } from "@/components/ui/info-card";
import { faqGroups } from "@/lib/site-content";

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <SiteHeader />
      <Section tone="cream">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] sm:text-6xl">
            Common questions about Twynex, partners, and trust.
          </h1>
        </Reveal>
        <div className="mt-12 grid gap-6">
          {faqGroups.map((group) => (
            <InfoCard key={group.category} title={group.category}>
              <div className="grid gap-5">
                {group.items.map((item) => (
                  <div key={item.question} className="border-t border-border pt-5 first:border-t-0 first:pt-0">
                    <h2 className="text-lg font-semibold">{item.question}</h2>
                    <p className="mt-2 text-base leading-7 text-muted-foreground">{item.answer}</p>
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
