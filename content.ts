/**
 * All website copy lives here. Edit this file to change text on the site.
 *
 * Search for "TODO" to find everything that still needs a real value.
 */

export type CapabilityId = "language" | "vision" | "generative";

export type Product = {
  id: string;
  name: string;
  /** Short line under the product name. */
  category: string;
  summary: string;
  /** Optional feature list, shown as bullets on the card. */
  highlights?: string[];
  /** Which AI areas the product uses. Drives the tags and the hero diagram. */
  capabilities: CapabilityId[];
  /** Plain-language tag for products that have no AI capability listed. */
  tag?: string;
  /** Another product id this one is designed to work with. */
  worksWith?: string;
  /** Shows the "Internal platform" badge. */
  internal?: boolean;
  /** Optional public link to the product. Leave undefined to hide. */
  url?: string;
};

export type Capability = {
  id: CapabilityId;
  title: string;
  description: string;
};

export const site = {
  name: "Usaha AI",
  domain: "usaha.ai",
  url: "https://usaha.ai",
  title: "Usaha AI: AI products built for real-world industry",
  description:
    "Usaha AI is an Indonesian startup building practical AI products for businesses and industry: sales outreach, computer vision and ERP for palm oil mills, and generative AI.",
};

export const nav = [
  { label: "Products", href: "#products" },
  { label: "Palm oil", href: "#palm-oil" },
  { label: "How we use AI", href: "#ai" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headline: "AI products built for real-world industry",
  subheadline:
    "Usaha AI builds practical AI products for businesses and industry in Indonesia, from sales outreach to palm oil mills.",
  primaryCta: { label: "Explore products", href: "#products" },
  secondaryCta: { label: "Contact us", href: "#contact" },
  diagramCaption: "How our products connect to the AI we build with",
};

export const productsSection = {
  title: "Products",
  intro:
    "Three products for customers, and two internal platforms we use to build and run them.",
  internalTitle: "Internal platforms",
  internalIntro:
    "Platforms we built for our own use: one to train and run vision AI, one to generate images and video.",
};

export const products: Product[] = [
  {
    id: "satellyte",
    name: "Satellyte",
    category: "B2B lead generation for LinkedIn",
    summary:
      "A SaaS for sales teams. It helps them find prospects on LinkedIn and run outreach automatically.",
    // TODO: if Satellyte uses an LLM (e.g. to write outreach messages), set
    // capabilities: ["language"] and remove the tag below. Left empty so the
    // site does not claim AI usage that has not been confirmed.
    capabilities: [],
    tag: "Sales automation",
  },
  {
    id: "autograde",
    name: "AutoGrade",
    category: "AI fruit grading for palm oil mills",
    summary:
      "Computer vision checks fruit quality automatically when trucks deliver fruit to the mill.",
    capabilities: ["vision"],
  },
  {
    id: "autoerp",
    name: "AutoERP",
    category: "The ERP built for palm oil mills",
    summary: "An ERP for palm oil mills, built on ERPNext.",
    highlights: [
      "Digital weighbridge tickets with automatic quality deductions",
      "Purchase and stock records created from each truck visit",
      "Mill dashboard: OER/KER, intake by source, and ISPO/RSPO certification",
    ],
    capabilities: [],
    tag: "Mill operations",
    worksWith: "autograde",
  },
  {
    id: "usaha-vision",
    name: "Usaha Vision",
    category: "Custom vision AI, trained in-house",
    summary:
      "Our platform to train and deploy custom vision AI on our own servers.",
    highlights: [
      "AI-assisted image labeling",
      "Model training with accuracy reports",
      "Prediction API",
    ],
    capabilities: ["vision"],
    internal: true,
  },
  {
    id: "usaha-genai",
    name: "Usaha GenAI",
    category: "Private AI studio for images and video",
    summary:
      "Our private studio for generating images and short videos, available as a web app, an API, and over MCP.",
    highlights: [
      "Text-to-image",
      "Image editing with reference images",
      "Short image-to-video clips",
    ],
    capabilities: ["generative"],
    internal: true,
  },
];

export type Step = {
  title: string;
  body: string;
  /** Product that handles this step. */
  product: string;
};

export const palmOil = {
  title: "Built for palm oil mills",
  intro:
    "AutoGrade and AutoERP work together on a mill's fruit intake, from the moment a truck arrives to the numbers on the dashboard.",
  steps: [
    {
      title: "Weigh the truck",
      body: "Each truck visit gets a digital weighbridge ticket.",
      product: "AutoERP",
    },
    {
      title: "Grade the fruit",
      body: "Computer vision checks fruit quality automatically as it is received.",
      product: "AutoGrade",
    },
    {
      title: "Apply deductions",
      body: "Quality deductions are applied to the ticket automatically.",
      product: "AutoERP",
    },
    {
      title: "Record purchase and stock",
      body: "Purchase and stock records are created from each truck visit.",
      product: "AutoERP",
    },
    {
      title: "Read the dashboard",
      body: "OER/KER, intake by source, and ISPO/RSPO certification in one mill dashboard.",
      product: "AutoERP",
    },
  ] satisfies Step[],
};

export const capabilitiesSection = {
  title: "How we use AI",
  intro: "Three kinds of AI sit underneath everything we ship.",
};

export const capabilities: Capability[] = [
  {
    id: "language",
    title: "Language AI",
    // TODO: name the products that use Claude. No product is linked to
    // Language AI yet, so this area is hidden from the hero diagram and has no
    // "Used in" line. Add "language" to a product's capabilities to link it.
    description:
      "We use large language models such as Claude to power AI agents and automate text work.",
  },
  {
    id: "vision",
    title: "Computer vision",
    description:
      "We build detection and visual grading for industry, so quality checks happen automatically from a camera image.",
  },
  {
    id: "generative",
    title: "Generative AI",
    description:
      "We generate images and short videos from text and reference images for creative and marketing work.",
  },
];

export const about = {
  title: "About",
  paragraphs: [
    "Usaha AI is an AI startup from Indonesia. We build practical AI products for businesses and industry, aimed at everyday work rather than demos.",
    "Our products cover sales outreach and palm oil mill operations. We also build our own platforms for vision AI and generative AI, so we can train, run, and improve the models behind them.",
  ],
  principlesTitle: "How we work",
  principles: [
    {
      title: "Start from the job",
      body: "We begin with work people already do every day, like grading fruit or finding sales leads, and build the AI around it.",
    },
    {
      title: "Run it ourselves",
      body: "Our vision models are trained and served on our own servers, and our generative AI studio is private to us.",
    },
    {
      title: "Build on proven tools",
      body: "Where a solid foundation exists, we use it: ERPNext for AutoERP, large language models such as Claude for language work. Our effort goes into the parts specific to each industry.",
    },
  ],
  // TODO: set the year Usaha AI was founded, e.g. 2024. Hidden while null.
  foundedYear: null as number | null,
  location: "Indonesia", // TODO: add a city if you want, e.g. "Jakarta, Indonesia"
};

export const contact = {
  title: "Contact",
  intro: "Questions, partnerships, or a product demo: send us an email.",
  email: "support@usaha.ai",
  location: about.location,
};
