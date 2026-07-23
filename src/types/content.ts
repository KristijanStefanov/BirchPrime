export type IndustrySlug = "gradezhnishtvo" | "transport" | "mebel-i-enterier";

export interface SpecRow {
  label: string;
  value: string;
  note?: string;
}

export interface ProductApplication {
  title: string;
  description: string;
}

export interface ProductDocument {
  title: string;
  href: string;
  size?: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  classificationCodes: string[];
  lede: string;
  description: string;
  surface: string;
  benefits: string[];
  specs: SpecRow[];
  applications: ProductApplication[];
  industries: IndustrySlug[];
  documents?: ProductDocument[];
  heroImageAlt: string;
  heroImage: string;
  gallery: string[];
  swatchLabel: string;
  featured?: boolean;
  seoTitle: string;
  seoDescription: string;
}

export interface Industry {
  slug: IndustrySlug;
  name: string;
  overline: string;
  headline: string;
  lede: string;
  body: string;
  requirements: string[];
  productSlugs: string[];
  heroImageAlt: string;
  heroImage: string;
  icon: string;
  seoTitle: string;
  seoDescription: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  readingTimeMinutes: number;
  publishedAt: string;
  category: string;
  heroImageAlt: string;
}

export interface ContactInfo {
  email: string;
  phones: string[];
  address: string;
  workingHoursNote: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  taglineShort: string;
  taglineLong: string;
  aboutParagraphs: string[];
  yearFounded?: number;
  markets: string[];
}
