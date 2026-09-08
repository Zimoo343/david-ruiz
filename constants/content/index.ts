import { LanguageContent } from "./types";
import { profileContent } from "./profile";
import { jobsContent } from "./jobs";
import { educationContent } from "./education";
import { portfolioContent } from "./portfolio";
import { skillsContent } from "./skills";
import { socialsContent } from "./socials";
import { uiContent } from "./ui";

// Re-export Locale so consumers keep importing from "@/constants/content"
export type { Locale } from "./types";

export const content: { en: LanguageContent; es: LanguageContent } = {
  en: {
    ...profileContent.en,
    ...jobsContent.en,
    ...educationContent.en,
    ...portfolioContent.en,
    ...skillsContent.en,
    ...socialsContent.en,
    ...uiContent.en,
  },
  es: {
    ...profileContent.es,
    ...jobsContent.es,
    ...educationContent.es,
    ...portfolioContent.es,
    ...skillsContent.es,
    ...socialsContent.es,
    ...uiContent.es,
  },
};