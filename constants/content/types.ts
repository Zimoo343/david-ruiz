import { JobExperienceProps } from "@/components/common/JobExperience";
import { PortfolioItemProps } from "@/components/common/PortfolioItem";
import { SocialLinkProps } from "@/components/common/SocialLink";

export type Locale = "en" | "es";

export type CertificateItem = {
  title: string;
  issuer?: string;
  issueDate?: string;
  url: string;
};

export type NavItem = {
  url: string;
  label: string;
  contact?: boolean;
};

export type ProfileContent = {
  fullName: string;
  jobTitle: string;
  statement: string;
  resumeStatement: string;
  location: string;
};

export type SeoContent = {
  title: string;
  description: string;
};

export type UiContent = {
  experience: string;
  education: string;
  links: string;
  statement: string;
  skills: string;
  certificates: string;
  visitSite: string;
  portfolioTitle: string;
  nav: NavItem[];
  contact: {
    greeting: string;
    sendEmail: string;
  };
};

export type LanguageContent = {
  profile: ProfileContent;
  skills: string[];
  jobs: JobExperienceProps[];
  education: JobExperienceProps;
  certificates: CertificateItem[];
  portfolioItems: PortfolioItemProps[];
  socialLinks: SocialLinkProps[];
  seo: SeoContent;
  ui: UiContent;
};

export type ProfileSlice = Pick<LanguageContent, "profile" | "seo">;
export type JobsSlice = Pick<LanguageContent, "jobs">;
export type EducationSlice = Pick<LanguageContent, "education" | "certificates">;
export type PortfolioSlice = Pick<LanguageContent, "portfolioItems">;
export type SkillsSlice = Pick<LanguageContent, "skills">;
export type SocialsSlice = Pick<LanguageContent, "socialLinks">;
export type UiSlice = Pick<LanguageContent, "ui">;