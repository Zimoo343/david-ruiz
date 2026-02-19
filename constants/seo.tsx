import type { NextSeoProps } from "next-seo";
import { aboutMeStatement } from "./content/profile";

const BASE_URL = "https://davidruiz.dev";
const DEFAULT_TITLE = `David Ruiz 🎮 | Software Engineer`;
const DEFAULT_DESCRIPTION = aboutMeStatement;
/**
 * Default SEO settings. These are the fallbacks if a `NextSeo` component is not
 * found on the page. For all options, @see https://github.com/garmeeh/next-seo
 */
export const DEFAULT_SEO: NextSeoProps = {
  titleTemplate: DEFAULT_TITLE,
  defaultTitle: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    url: BASE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en-US",
    images: [
      {
        // OG image paths must include the host in the URL
        url: `${BASE_URL}/images/default-share.jpeg`,
        width: 1200,
        height: 640,
        alt: "Davd Ruiz",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@zimoo343",
    site: "@zimoo343",
    cardType: "summary_large_image",
  },
};
