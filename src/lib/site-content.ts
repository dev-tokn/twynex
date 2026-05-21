export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
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
  name: "Twynex Contact Team",
  email: "contact@twynex.example",
  location: "Twynex, CA USA",
};

export const metrics = [
  { value: "US-side", label: "Bank and issuer relationships" },
  { value: "Local", label: "QR, wallet, card, bill pay, transit, and merchant acceptance" },
  { value: "Modular", label: "Corridor-by-corridor rollout" },
];

export const problemPoints = [
  "Local rails are becoming the default way people pay in many markets, but US-side payment relationships often stop at the border.",
  "American travelers and businesses still fall back to cash, card acceptance workarounds, FX friction, or local accounts they do not have.",
  "Banks and issuers risk losing payment relevance the moment customers leave familiar US payment environments.",
  "Every direct corridor integration brings local partners, rail-specific rules, compliance coordination, reporting, and reconciliation work.",
];

export const whatTwynexDoes = [
  "Turns familiar American payment relationships into local payment experiences abroad through partner-led corridors.",
  "Coordinates routing, partner instructions, FX metadata, compliance metadata, transaction status, and reconciliation.",
  "Helps banks and issuers extend customer utility beyond the US without building every local rail integration from scratch.",
  "Starts with focused service modules, then expands corridor by corridor with regulated partners.",
];

export const serviceModules = [
  {
    title: "QR acceptance abroad",
    copy: "American customers scan local merchant QR codes abroad while payment flows are coordinated through US-side and destination-country partners.",
  },
  {
    title: "Travel and business cards",
    copy: "Partner-led card products for international travel, reporting, and local use, starting with India and Malaysia.",
  },
  {
    title: "Bill payments abroad",
    copy: "US-side account relationships connected to local household, utility, education, healthcare, or recurring obligations abroad.",
  },
  {
    title: "Wallet acceptance",
    copy: "Local wallet and merchant payment experiences configured around country-specific rails and partner operating models.",
  },
  {
    title: "Transit and NFC",
    copy: "Virtual card and transit-oriented payment experiences for local movement and daily-use moments abroad.",
  },
  {
    title: "Merchant acceptance",
    copy: "Destination-country merchant acceptance and acquiring workflows supported through local regulated partners.",
  },
];

export const initialFocus = [
  {
    title: "Cross-border QR payments",
    launch: "Target Q4 2026",
    markets: "An American customer scans a local QR code abroad",
    copy: "The customer starts from a familiar US-side payment relationship, while the merchant receives through destination-country rails.",
  },
  {
    title: "Local cards for business travelers",
    launch: "Target Q1 2027",
    markets: "Initial markets: India and Malaysia",
    copy: "Card products for international travel and business use, designed around partner distribution, reporting, and corridor-specific operations.",
  },
];

export const flowSteps = [
  "Customer starts from a US-side bank, issuer, or payment relationship",
  "Twynex coordinates routing, partner instructions, FX metadata, compliance metadata, and transaction status",
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
  "ISO and payment-network aligned messaging where appropriate",
];

export const partnerOutcomes = [
  "Keep customers active when they travel, trade, or support obligations abroad",
  "Create new international transaction activity and corridor revenue opportunities",
  "Participate in FX spread, platform fee, transaction fee, or revenue-share models where appropriate",
  "Launch local payment corridors without asking every partner to build every rail integration from scratch",
  "Improve routing visibility, reconciliation, settlement reporting, and auditability across corridors",
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
      "Extends payment utility for travelers and business users while participating in transaction economics, reporting, and customer retention.",
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
      "Orchestrates routing, FX metadata, compliance metadata, partner instructions, status, reconciliation, reporting, corridor setup, and product configuration.",
  },
];

export const partnerSteps = [
  "Define the payment moment, corridor, and service module",
  "Confirm US-side partner, destination partner, local rail, and customer journey",
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
          "Twynex is a cross-border transaction orchestration platform that helps US banks, issuers, and regulated partners turn American payment relationships into local payment experiences abroad.",
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
          "Modules include QR acceptance abroad, travel and business cards, bill payments abroad, wallet acceptance, transit/NFC experiences, and merchant acceptance workflows.",
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
          "Twynex coordinates routing, partner instructions, FX metadata, compliance metadata, transaction status, reporting, reconciliation, audit records, and corridor setup.",
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
