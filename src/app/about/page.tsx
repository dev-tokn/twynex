import Image from "next/image";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Eyebrow } from "@/components/ui/eyebrow";
import { InfoCard } from "@/components/ui/info-card";
import { withBasePath } from "@/lib/paths";

const team = [
  {
    name: "Sudhir Kulkarni",
    role: "CEO",
    group: "leadership",
    image: "/team/sudhir-kulkarni.png",
  },
  {
    name: "Alok Arora",
    role: "SVP Product",
    group: "leadership",
    image: "/team/alok-arora.png",
  },
  {
    name: "Bipin Sahni",
    role: "Advisor",
    group: "advisor",
    image: "/team/bipin-sahani.png",
  },
  {
    name: "Jagdeep Singh Sahota",
    role: "Advisor",
    group: "advisor",
    image: "/team/jagdeep-sahota.png",
  },
  {
    name: "David Black",
    role: "Advisor",
    group: "advisor",
    image: "/team/david-black.png",
  },
];

const leadership = team.filter((member) => member.group === "leadership");
const advisors = team.filter((member) => member.group === "advisor");

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      <SiteHeader />
      <Section tone="cream">
        <Reveal>
          <Eyebrow>About Twynex</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] sm:text-6xl">
            Building the operating layer for American payment relationships abroad.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">
            Twynex connects US-side payment relationships to local acceptance abroad
            through regulated partners, corridor-first execution, and practical
            service modules.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <InfoCard title="Mission">
            <p className="text-base leading-7 text-muted-foreground">
              Help American banks and issuers make familiar payment relationships
              work inside local payment experiences abroad.
            </p>
          </InfoCard>
          <InfoCard title="Why now">
            <p className="text-base leading-7 text-muted-foreground">
              Local rails are becoming everyday payment infrastructure in many
              markets, while cross-border local acceptance remains fragmented.
            </p>
          </InfoCard>
          <InfoCard title="Company focus">
            <p className="text-base leading-7 text-muted-foreground">
              Corridor-first execution, regulated partner participation, and service
              modules that solve visible payment utility gaps.
            </p>
          </InfoCard>
        </div>
        <Reveal className="mt-14">
          <Eyebrow>Leadership and advisors</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
            Payments, banking, product, and cross-border execution experience.
          </h2>
        </Reveal>
        <Stagger className="mt-9 grid gap-5 lg:grid-cols-2">
          {leadership.map((member) => (
            <StaggerItem key={member.name}>
              <InfoCard className="h-full overflow-hidden p-0">
                <div className="relative aspect-[5/4] bg-muted">
                  <Image
                    src={withBasePath(member.image) ?? member.image}
                    alt={`${member.name} profile portrait`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                  <span
                    aria-label={`${member.name} LinkedIn profile`}
                    className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-lg bg-background/95 text-sm font-bold text-accent shadow-sm ring-1 ring-border backdrop-blur"
                    title="LinkedIn"
                  >
                    in
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xl font-semibold">{member.name}</p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </InfoCard>
            </StaggerItem>
          ))}
        </Stagger>
        <Stagger className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((member) => (
            <StaggerItem key={member.name}>
              <InfoCard className="h-full overflow-hidden p-0">
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={withBasePath(member.image) ?? member.image}
                    alt={`${member.name} profile portrait`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                  <span
                    aria-label={`${member.name} LinkedIn profile`}
                    className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-lg bg-background/95 text-sm font-bold text-accent shadow-sm ring-1 ring-border backdrop-blur"
                    title="LinkedIn"
                  >
                    in
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-base font-semibold">{member.name}</p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </InfoCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      <SiteFooter />
    </main>
  );
}
