const audiencePaths = [
  {
    label: "Travelers and users",
    title: "Pay abroad like a local.",
    copy: "Scan local QR, wallet, transit, or merchant payment experiences through a familiar US-side relationship.",
  },
  {
    label: "Banks and issuers",
    title: "Keep the customer relationship global.",
    copy: "Extend utility outside the US and participate in international transaction, FX, and platform economics.",
  },
  {
    label: "Investors and partners",
    title: "Enter a high-friction payments wedge.",
    copy: "Start with American payment rails into local acceptance abroad, then expand corridors and use cases.",
  },
];

const useCases = [
  {
    title: "Cross-border QR payments",
    launch: "Target Q4 2026",
    markets: "Initial rollout: 3 Southeast Asia countries",
    copy: "American tourists scan local QR codes abroad, while destination merchants receive through their local rails.",
  },
  {
    title: "Local cards for business travelers",
    launch: "Target Q1 2027",
    markets: "Initial markets: India and Malaysia",
    copy: "Card products for international travel and business use, designed around partner distribution and reconciliation.",
  },
  {
    title: "Next rail extensions",
    launch: "2028 onward",
    markets: "Wallets, transit, bill pay, and acquiring",
    copy: "Additional local payment experiences for travelers, immigrants, partner banks, and destination merchants.",
  },
];

const flowSteps = [
  "US customer initiates through a bank, issuer, or app",
  "Twynex orchestrates routing, FX metadata, and partner instructions",
  "Regulated US and destination partners process the payment flow",
  "Local rail completes QR, wallet, card, NFC, or payout acceptance",
  "Status, reconciliation, and audit records return to partners",
];

const roadmap = [
  { date: "Q4 2026", label: "Cross-border QR launch" },
  { date: "Q1 2027", label: "Local cards for business travelers" },
  { date: "2028+", label: "Wallets, transit, bill pay, merchant acquiring" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#171411]">
      <header className="sticky top-0 z-50 border-b border-[#ded5c7] bg-[#fffaf2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Twynex home">
            <span className="grid size-9 place-items-center rounded-lg bg-[#171411] text-sm font-bold text-white">
              TW
            </span>
            <span className="text-lg font-semibold">Twynex</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#5f574d] lg:flex">
            <a className="hover:text-[#171411]" href="#platform">
              Platform
            </a>
            <a className="hover:text-[#171411]" href="#use-cases">
              Use Cases
            </a>
            <a className="hover:text-[#171411]" href="#partners">
              Partners
            </a>
            <a className="hover:text-[#171411]" href="#investors">
              Investors
            </a>
            <a className="hover:text-[#171411]" href="#trust">
              Compliance
            </a>
            <a className="hover:text-[#171411]" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href="mailto:sudhir@twynex.com?subject=Twynex%20partner%20inquiry"
            className="rounded-lg bg-[#0d7c66] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#096b58]"
          >
            Partner inquiry
          </a>
        </div>
      </header>

      <section id="home" className="overflow-hidden border-b border-[#ded5c7] bg-[#fffaf2]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-sm font-semibold uppercase text-[#0d7c66]">
              Cross-border transaction orchestration
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
              Globalizing America&apos;s Payment Rails
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[#5f574d]">
              Twynex helps US banks, issuers, and regulated partners connect
              American customers to local payment rails abroad.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:sudhir@twynex.com?subject=Twynex%20partner%20inquiry"
                className="rounded-lg bg-[#171411] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#342d26]"
              >
                Partner with Twynex
              </a>
              <a
                href="mailto:sudhir@twynex.com?subject=Twynex%20investor%20inquiry"
                className="rounded-lg border border-[#cfc3b3] px-5 py-3 text-center text-sm font-semibold text-[#171411] transition hover:border-[#171411]"
              >
                Investor inquiry
              </a>
            </div>
            <div className="mt-10 grid gap-4 border-t border-[#ded5c7] pt-8 sm:grid-cols-3">
              <Metric value="Q4 2026" label="QR payments target" />
              <Metric value="Q1 2027" label="Business card target" />
              <Metric value="$47M+" label="2030 ARR thesis across first two use cases" />
            </div>
          </div>

          <div className="relative min-h-[520px] rounded-lg border border-[#d8cbbb] bg-white p-5 shadow-[0_24px_70px_rgba(70,53,32,0.12)]">
            <div className="absolute inset-x-8 top-8 h-px bg-[#ded5c7]" />
            <div className="grid h-full grid-rows-[auto_1fr_auto] gap-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase text-[#82776b]">
                    Corridor console
                  </p>
                  <p className="mt-1 text-lg font-semibold">US rails to local acceptance</p>
                </div>
                <span className="rounded-lg bg-[#e8f5f0] px-3 py-2 text-xs font-semibold text-[#0d7c66]">
                  Designed for partners
                </span>
              </div>

              <div className="relative grid place-items-center overflow-hidden rounded-lg bg-[#f7f4ee] p-5">
                <div className="absolute left-8 right-8 top-1/2 h-2 -translate-y-1/2 rounded-full bg-[#e5ddd2]" />
                <div className="absolute left-[22%] top-1/2 h-2 w-[56%] -translate-y-1/2 rounded-full bg-[#0d7c66]" />
                <RailNode className="left-[16%] top-[43%]" label="US bank" tone="bg-[#171411]" />
                <RailNode className="left-[40%] top-[23%]" label="Twynex" tone="bg-[#0d7c66]" large />
                <RailNode className="right-[20%] top-[43%]" label="Local partner" tone="bg-[#b24a3b]" />
                <RailNode className="right-[16%] top-[67%]" label="QR wallet card NFC" tone="bg-[#d69b2d]" />
                <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
                  <Status label="Routing" value="Partner-led" />
                  <Status label="Data" value="Audit trail" />
                  <Status label="Rails" value="Local finish" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <MiniPanel label="Customer experience" value="Pay abroad from a familiar US relationship" />
                <MiniPanel label="Merchant outcome" value="Receive through local payment rails" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="border-b border-[#ded5c7] bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#b24a3b]">The problem</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight">
                Domestic rails are modernizing. Cross-border acceptance is still fragmented.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Travelers still face cash, card, wallet, FX, and local QR friction.",
                "US payment products lose utility when customers leave familiar rails.",
                "Direct local integrations are slow, expensive, and compliance-heavy.",
                "Banks and issuers miss revenue when the relationship breaks abroad.",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-[#ded5c7] bg-white p-5">
                  <p className="text-base leading-7 text-[#4d453d]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-lg bg-[#171411] p-6 text-white sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase text-[#87d6c5]">How Twynex works</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight">
                  Orchestration between US-side relationships and destination-country rails.
                </h2>
              </div>
              <ol className="grid gap-3">
                {flowSteps.map((step, index) => (
                  <li
                    key={step}
                    className="grid grid-cols-[2.5rem_1fr] items-start gap-4 rounded-lg bg-white/8 p-4"
                  >
                    <span className="grid size-10 place-items-center rounded-lg bg-[#0d7c66] text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="pt-2 text-sm leading-6 text-[#f5efe6]">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="border-b border-[#ded5c7] bg-[#fffaf2]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-[#0d7c66]">Audience paths</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight">
                One platform wedge, three clear routes into the market.
              </h2>
            </div>
            <a
              href="mailto:sudhir@twynex.com?subject=Twynex%20corridor%20discussion"
              className="rounded-lg border border-[#cfc3b3] px-5 py-3 text-center text-sm font-semibold hover:border-[#171411]"
            >
              Discuss a partner corridor
            </a>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {audiencePaths.map((path) => (
              <article key={path.label} className="rounded-lg border border-[#ded5c7] bg-white p-6">
                <p className="text-sm font-semibold text-[#b24a3b]">{path.label}</p>
                <h3 className="mt-4 text-2xl font-semibold">{path.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#5f574d]">{path.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="border-b border-[#ded5c7] bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase text-[#b24a3b]">Initial use cases</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
            Start where payment acceptance is visibly local and operationally hard.
          </h2>
          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <article key={useCase.title} className="rounded-lg border border-[#ded5c7] bg-white p-6">
                <p className="text-sm font-semibold text-[#0d7c66]">{useCase.launch}</p>
                <h3 className="mt-4 text-2xl font-semibold">{useCase.title}</h3>
                <p className="mt-3 text-sm font-medium text-[#82776b]">{useCase.markets}</p>
                <p className="mt-5 text-base leading-7 text-[#5f574d]">{useCase.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="border-b border-[#ded5c7] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase text-[#0d7c66]">Compliance and trust</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              Designed around regulated partners, auditability, and conservative public claims.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5f574d]">
              Twynex is positioned around a partner-bank model where regulated
              partners perform KYC and operate payment accounts and flows.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "KYC by regulated partners",
              "Partner-owned payment flows",
              "Encryption at rest and in transit",
              "ISO 20022 where appropriate",
              "Visa, Mastercard, NFC, and PCI-DSS aligned messaging where relevant",
              "Audit trail designed to support AML, OFAC, SAR, and CFT workflows",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-[#ded5c7] bg-[#fffaf2] p-5">
                <p className="text-base font-medium leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="investors" className="border-b border-[#ded5c7] bg-[#171411] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase text-[#87d6c5]">Roadmap</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              A corridor-first path from QR payments to broader local acceptance.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#d9d0c5]">
              The investor story is a focused wedge: American payment rails
              into local international payment experiences, then repeatable
              partner corridors.
            </p>
          </div>
          <div className="grid gap-4">
            {roadmap.map((item) => (
              <div key={item.date} className="grid gap-4 rounded-lg bg-white/8 p-5 sm:grid-cols-[8rem_1fr]">
                <p className="text-lg font-semibold text-[#f1c36d]">{item.date}</p>
                <p className="text-lg leading-7 text-[#fffaf2]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#fffaf2]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-[#b24a3b]">Start a conversation</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight">
                Build the next cross-border payment corridor with Twynex.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f574d]">
                For partner, investor, or pilot inquiries, contact Sudhir Kulkarni
                and the Twynex team.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:sudhir@twynex.com"
                className="rounded-lg bg-[#0d7c66] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#096b58]"
              >
                sudhir@twynex.com
              </a>
              <a
                href="tel:+14084647982"
                className="rounded-lg border border-[#cfc3b3] px-5 py-3 text-center text-sm font-semibold hover:border-[#171411]"
              >
                +1 (408) 464-7982
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ded5c7] bg-[#171411] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[#d9d0c5] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Twynex, CA USA</p>
          <p>Cross-border orchestration for regulated payment partners.</p>
        </div>
      </footer>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-sm leading-5 text-[#6f665b]">{label}</p>
    </div>
  );
}

function RailNode({
  className,
  label,
  tone,
  large = false,
}: {
  className: string;
  label: string;
  tone: string;
  large?: boolean;
}) {
  return (
    <div className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 ${className}`}>
      <span className={`${large ? "size-20" : "size-14"} rounded-lg ${tone} shadow-lg`} />
      <span className="max-w-24 text-center text-xs font-semibold text-[#4d453d]">{label}</span>
    </div>
  );
}

function Status({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white p-3">
      <p className="text-xs font-semibold uppercase text-[#82776b]">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}

function MiniPanel({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#ded5c7] p-4">
      <p className="text-xs font-semibold uppercase text-[#82776b]">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6">{value}</p>
    </div>
  );
}
