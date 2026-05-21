import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { InfoCard } from "@/components/ui/info-card";
import { contact } from "@/lib/site-content";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <SiteHeader />
      <Section tone="cream">
        <Eyebrow>Terms</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04]">
          Website terms of service draft.
        </h1>
        <InfoCard className="mt-10" title="Legal review required">
          <p className="text-base leading-7 text-muted-foreground">
            This page is a placeholder for website terms covering informational
            content, no financial or legal advice, intellectual property,
            prohibited use, disclaimers, limitation of liability, governing law,
            and contact details. Replace with counsel-approved terms before production.
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
