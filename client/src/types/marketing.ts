import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
};

export type Metric = {
  value: number;
  suffix: string;
  label: string;
};

export type CaseStudy = {
  client: string;
  challenge: string;
  result: string;
  stats: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};
