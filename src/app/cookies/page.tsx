import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { InfoCard } from "@/components/ui/info-card";
import { contact } from "@/lib/site-content";

export default function CookiesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-surface text-foreground">
      <SiteHeader />
      <Section tone="cream">
        <Eyebrow>Cookies</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04]">
          Cookie policy draft.
        </h1>
        <InfoCard className="mt-10" title="Legal review required">
          <p className="text-base leading-7 text-muted-foreground">
            This page is a placeholder for essential cookies, analytics cookies,
            preference cookies, cookie management, and policy updates. Replace
            with final language once analytics and cookie tooling are confirmed.
          </p>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            Contact: {contact.email}
          </p>
        </InfoCard>
      </Section>
      <SiteFooter />
    </main>
  );
}
