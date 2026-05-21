import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { InfoCard } from "@/components/ui/info-card";
import { contact } from "@/lib/site-content";

const inquiryTypes = ["Partner inquiry", "Pilot interest", "Investor inquiry", "General/company inquiry"];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <SiteHeader />
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.04] sm:text-6xl">
              Route the right Twynex conversation.
            </h1>
            <p className="mt-7 text-xl leading-8 text-muted-foreground">
              For partner, pilot, investor, or company inquiries, contact Sudhir
              Kulkarni and the Twynex team.
            </p>
            <div className="mt-8 grid gap-3">
              <Button href={`mailto:${contact.email}`} className="inline-block">
                {contact.email}
              </Button>
              <Button href={contact.phoneHref} variant="secondary" className="inline-block">
                {contact.phone}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <InfoCard title="Inquiry details">
              <form className="grid gap-4">
                <input className="rounded-lg border border-border bg-background px-4 py-3 text-sm" name="name" placeholder="Name" />
                <input className="rounded-lg border border-border bg-background px-4 py-3 text-sm" name="organization" placeholder="Organization" />
                <input className="rounded-lg border border-border bg-background px-4 py-3 text-sm" name="email" placeholder="Email" type="email" />
                <select className="rounded-lg border border-border bg-background px-4 py-3 text-sm" name="inquiryType" defaultValue="">
                  <option value="" disabled>Inquiry type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
                <textarea className="min-h-36 rounded-lg border border-border bg-background px-4 py-3 text-sm" name="message" placeholder="Message" />
                <Button href={`mailto:${contact.email}`} variant="inverse">
                  Send by email
                </Button>
              </form>
            </InfoCard>
          </Reveal>
        </div>
      </Section>
      <SiteFooter />
    </main>
  );
}
