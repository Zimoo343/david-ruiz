import type { NextSeoProps } from "next-seo";
import { Locale } from "./content";

const BASE_URL = "https://davidruiz.dev";

type SeoContent = {
  title: string;
  description: string;
};

const openGraphLocale: Record<Locale, string> = {
  en: "en_US",
  es: "es_MX",
};

export const buildSeo = (seo: SeoContent, locale: Locale): NextSeoProps => ({
  titleTemplate: "David Ruiz |",
  defaultTitle: seo.title,
  description: seo.description,
  openGraph: {
    url: BASE_URL,
    title: seo.title,
    description: seo.description,
    locale: openGraphLocale[locale],
    images: [
      {
        // OG image paths must include the host in the URL
        url: `${BASE_URL}/images/default-share.jpeg`,
        width: 1200,
        height: 640,
        alt: "David Ruiz",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@zimoo343",
    site: "@zimoo343",
    cardType: "summary_large_image",
  },
});
