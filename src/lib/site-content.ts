export const navItems = [
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
];

export const footerCompanyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Investor inquiries", href: "/contact?inquiry=investor" },
];

export const footerLegalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
];

export const contact = {
  email: "sudhir@twynex.com",
  phone: "+1 (408) 464-7982",
  phoneHref: "tel:+14084647982",
  location: "Twynex, CA USA",
};

export const metrics = [
  { value: "US-side", label: "Payment relationships" },
  { value: "Local", label: "QR, wallet, card, bill pay, transit, and merchant rails" },
  { value: "Corridor", label: "Partner-led rollout model" },
];

export const problemPoints = [
  "Domestic payment rails are modernizing, but local acceptance abroad remains fragmented.",
  "American customers still meet cash, card acceptance, QR, wallet, FX, transit, and merchant-payment friction.",
  "Banks and issuers can lose utility when a customer leaves familiar US-side payment experiences.",
  "Direct local rail integrations are slow, operationally heavy, and different in every corridor.",
];

export const whatTwynexDoes = [
  "Orchestrates cross-border transaction flows between US-side relationships and destination-country rails.",
  "Coordinates routing, partner instructions, FX metadata, compliance metadata, status, and reconciliation.",
  "Works through banks, issuers, and regulated partners instead of positioning as a generic remittance app.",
  "Rolls out corridor by corridor, service module by service module.",
];

export const serviceModules = [
  {
    title: "Cross-border QR payments",
    copy: "American customers scan local QR codes abroad while merchants receive through destination-country rails.",
  },
  {
    title: "Local cards for business travelers",
    copy: "Partner-led card products for international travel and business use, starting with India and Malaysia.",
  },
  {
    title: "Immigrant bill payments",
    copy: "Bill payment experiences that connect US-side relationships to local destination-country obligations.",
  },
  {
    title: "Local wallet acceptance",
    copy: "Wallet and merchant payment experiences configured for country-specific payment behavior.",
  },
  {
    title: "Transit and NFC virtual cards",
    copy: "Virtual card and transit-oriented payment experiences for local movement abroad.",
  },
  {
    title: "Local merchant acquiring",
    copy: "Merchant acceptance and acquiring workflows supported through destination-country partners.",
  },
];

export const initialFocus = [
  {
    title: "Cross-border QR payments",
    launch: "Target Q4 2026",
    markets: "American tourist scans a local QR code abroad",
    copy: "The customer pays through a familiar US-side relationship, and the merchant receives through local rails.",
  },
  {
    title: "Local cards for business travelers",
    launch: "Target Q1 2027",
    markets: "Initial markets: India and Malaysia",
    copy: "Card products for international travel and business use, designed around partner distribution and reporting.",
  },
];

export const flowSteps = [
  "Customer starts from a US-side bank, issuer, or payment relationship",
  "Twynex coordinates routing, partner instructions, FX metadata, and compliance metadata",
  "Regulated partners process the applicable payment flows",
  "Destination rail completes local QR, wallet, card, NFC, bill pay, or merchant acceptance",
  "Status, reconciliation, and audit records return to partners",
];

export const partnerTypes = [
  "US banks",
  "Card issuers",
  "Destination-country banks and regulated partners",
  "Resellers and market development partners",
];

export const trustPoints = [
  "Partner-bank model",
  "KYC by regulated partners",
  "Sensitive data kept in partner systems where possible",
  "Audit trail designed to support AML, OFAC, SAR, and CFT workflows",
  "Encryption at rest and in transit",
  "ISO 20022 and payment-network aligned messaging where appropriate",
];

export const partnerOutcomes = [
  "Extend customer utility abroad",
  "Create new international transaction revenue",
  "Participate in FX spread, platform fee, transaction fee, or revenue-share models where appropriate",
  "Reduce the need for every partner to build direct local rail integrations",
  "Improve reporting, reconciliation, and auditability across corridors",
];

export const partnerRoles = [
  {
    role: "US partner bank",
    description:
      "Owns or supports US-side accounts and regulated flows, performs or coordinates KYC as applicable, and provides customer distribution or payment relationship access.",
  },
  {
    role: "US issuer",
    description:
      "Extends card or payment utility for travelers and business users while participating in transaction economics and retention.",
  },
  {
    role: "Destination-country bank or regulated partner",
    description:
      "Provides local rail access, merchant reach, payout capabilities, and local operating support.",
  },
  {
    role: "Reseller or market development partner",
    description:
      "Supports corridor development, local distribution, collections, and partner acquisition.",
  },
  {
    role: "Twynex",
    description:
      "Orchestrates routing, metadata, partner instructions, reconciliation, reporting, corridor setup, and product configuration.",
  },
];

export const partnerSteps = [
  "Define corridor and service module",
  "Confirm US-side partner, destination partner, rail, and customer journey",
  "Configure transaction orchestration, FX metadata, compliance metadata, and reporting needs",
  "Pilot with defined countries, partner accounts, and operating procedures",
  "Expand by corridor, service module, and local rail",
];

export const partnerEconomics = [
  "KYC charges",
  "Transaction charges",
  "FX spread",
  "Platform fees",
  "Revenue share",
  "Relevant partner cross-sell opportunities",
];

export const partnerFaqPreview = [
  "Who owns the customer relationship?",
  "Who performs KYC?",
  "Which countries are supported first?",
  "What rails can Twynex support?",
  "How are disputes, refunds, and reconciliation handled?",
];

export const faqGroups = [
  {
    category: "General",
    items: [
      {
        question: "What is Twynex?",
        answer:
          "Twynex is a cross-border transaction orchestration platform for US banks, issuers, and regulated partners.",
      },
      {
        question: "Is Twynex a bank?",
        answer:
          "No. Twynex is designed to work with banks and regulated partners that own and operate applicable regulated flows.",
      },
      {
        question: "Is Twynex available directly to consumers?",
        answer:
          "Twynex is currently described as a partner-led platform rather than a direct consumer product.",
      },
    ],
  },
  {
    category: "Offering",
    items: [
      {
        question: "What service modules is Twynex developing?",
        answer:
          "Modules include cross-border QR payments, local cards, bill payments, wallet acceptance, transit/NFC virtual cards, and local merchant acquiring.",
      },
      {
        question: "Which modules are first?",
        answer:
          "The initial public focus is cross-border QR payments targeted for Q4 2026 and local cards for business travelers targeted for Q1 2027.",
      },
      {
        question: "Which countries are first?",
        answer:
          "Local cards are currently described around India and Malaysia. Public corridor details should be confirmed before launch.",
      },
    ],
  },
  {
    category: "Partners",
    items: [
      {
        question: "Who can partner with Twynex?",
        answer:
          "Potential partners include US banks, issuers, destination-country banks, regulated partners, resellers, and market development partners.",
      },
      {
        question: "What does Twynex orchestrate?",
        answer:
          "Twynex coordinates routing, partner instructions, FX metadata, compliance metadata, reporting, reconciliation, and corridor setup.",
      },
    ],
  },
  {
    category: "Trust and compliance",
    items: [
      {
        question: "Who performs KYC?",
        answer:
          "KYC is described as performed by regulated partners or partner banks, depending on the corridor and operating model.",
      },
      {
        question: "Where is sensitive data stored?",
        answer:
          "The intended posture is to keep sensitive data in partner systems where possible.",
      },
    ],
  },
  {
    category: "Investors",
    items: [
      {
        question: "How can investors request information?",
        answer:
          "Investor inquiries are routed through the contact page as a secondary inquiry path.",
      },
    ],
  },
];
