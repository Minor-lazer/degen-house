import {
  BadgeDollarSign,
  BarChart3,
  Blocks,
  Bot,
  Crown,
  Flame,
  Globe2,
  Megaphone,
  MessageCircle,
  Network,
  Newspaper,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import type { CaseStudy, FaqItem, Metric, Service } from "@/types/marketing";

export const partnerLogos = [
  "ApexFi",
  "MintLab",
  "ChainForge",
  "NovaDAO",
  "YieldX",
  "PixelGuild",
  "Orbit Labs",
  "TokenBase"
];

export const services: Service[] = [
  {
    title: "Growth Strategy",
    description: "Positioning, funnel mapping, channel planning, and launch calendars built for Web3 attention cycles.",
    tags: ["GTM", "Funnels", "KPIs"],
    icon: Target
  },
  {
    title: "Community Building",
    description: "Discord, Telegram, and X community programs that turn early believers into active advocates.",
    tags: ["Discord", "Telegram", "X"],
    icon: Users
  },
  {
    title: "Influencer Marketing",
    description: "Creator partnerships, campaign briefs, content sequencing, and conversion tracking across crypto-native channels.",
    tags: ["Creators", "Briefs", "Tracking"],
    icon: Megaphone
  },
  {
    title: "Web3 Exposure",
    description: "Narrative campaigns that put your token, product, or NFT collection in front of the right ecosystem.",
    tags: ["Awareness", "Narrative", "Reach"],
    icon: Globe2
  },
  {
    title: "PR Campaigns",
    description: "Media angles, launch announcements, founder stories, and credibility-building coverage.",
    tags: ["Media", "Launches", "Trust"],
    icon: Newspaper
  },
  {
    title: "Content Marketing",
    description: "Sharp social, explainers, threads, founder posts, decks, and campaign assets with Web3-native voice.",
    tags: ["Threads", "Memes", "Decks"],
    icon: Sparkles
  }
];

export const valueProps = [
  {
    title: "Web3 Native Team",
    body: "We understand liquidity, token communities, narratives, and the speed of crypto culture.",
    icon: Blocks
  },
  {
    title: "Global Network",
    body: "KOLs, founders, communities, media partners, and regional channels across high-signal markets.",
    icon: Network
  },
  {
    title: "Performance Driven",
    body: "Clear KPIs, weekly reporting, channel testing, and campaigns designed around measurable outcomes.",
    icon: BarChart3
  },
  {
    title: "Community First",
    body: "We build momentum that feels earned, useful, and alive instead of rented attention.",
    icon: MessageCircle
  }
];

export const processSteps = [
  {
    title: "Discover",
    description: "Audit product, audience, competitors, community health, and launch timing."
  },
  {
    title: "Plan",
    description: "Build the campaign architecture: narratives, channels, KOLs, content, and KPIs."
  },
  {
    title: "Execute",
    description: "Run coordinated social, community, PR, influencer, and content sprints."
  },
  {
    title: "Scale",
    description: "Double down on winning channels, refine messaging, and report growth signals."
  }
];

export const caseStudies: CaseStudy[] = [
  {
    client: "DeFi Launchpad",
    challenge: "Needed credible pre-launch demand before token generation event.",
    result: "Built a multi-channel waitlist engine with KOL pushes and community quests.",
    stats: ["38K waitlist", "12M reach", "4.7x engagement"]
  },
  {
    client: "NFT Gaming Studio",
    challenge: "Low community activity and unclear collection positioning.",
    result: "Reframed the narrative, rebuilt Discord flows, and launched creator-led gameplay drops.",
    stats: ["210% activity", "62K impressions", "3 regions activated"]
  },
  {
    client: "Layer 2 Tooling",
    challenge: "Strong product, weak founder visibility and limited developer awareness.",
    result: "Created founder content, PR angles, partner posts, and ecosystem-specific campaigns.",
    stats: ["19 media hits", "27K site visits", "41% lower CAC"]
  }
];

export const metrics: Metric[] = [
  { value: 100, suffix: "M+", label: "Impressions generated" },
  { value: 50, suffix: "+", label: "Web3 projects supported" },
  { value: 20, suffix: "+", label: "Countries reached" },
  { value: 6, suffix: "x", label: "Average launch momentum lift" }
];

export const testimonials = [
  {
    quote:
      "Degen House gave us the Web3 muscle we were missing: better narrative, better community energy, and cleaner execution.",
    name: "Aarav Mehta",
    role: "Founder, NovaDAO"
  },
  {
    quote:
      "They moved like an internal growth team. Strategy on Monday, creator briefs by Wednesday, results by the end of the week.",
    name: "Mira Chen",
    role: "Growth Lead, MintLab"
  },
  {
    quote:
      "The campaign finally felt crypto-native. No corporate fluff, just sharp positioning and real ecosystem traction.",
    name: "Leo Hart",
    role: "CMO, ChainForge"
  }
];

export const faqs: FaqItem[] = [
  {
    question: "Do you work with pre-launch Web3 projects?",
    answer:
      "Yes. Pre-launch strategy, community setup, KOL mapping, PR angles, and launch calendars are core parts of the Degen House offer."
  },
  {
    question: "Can this site support a backend later?",
    answer:
      "The frontend is structured with services, data, routes, and typed components so APIs, contact forms, CMS content, and dashboards can be added without rebuilding the app."
  },
  {
    question: "What channels do you focus on?",
    answer:
      "X, Discord, Telegram, PR, creator networks, KOL distribution, launch platforms, ecosystem communities, and conversion-focused landing pages."
  },
  {
    question: "Is the content here static for V1?",
    answer:
      "Yes. V1 is a fast static site. The architecture leaves room for Node.js, Express, PostgreSQL, and Prisma later."
  }
];

export const orbitItems = [
  { label: "KOL", icon: Crown },
  { label: "TGE", icon: Rocket },
  { label: "PR", icon: Newspaper },
  { label: "NFT", icon: Bot },
  { label: "ROI", icon: BadgeDollarSign },
  { label: "HYPE", icon: Flame },
  { label: "TRUST", icon: ShieldCheck }
];
