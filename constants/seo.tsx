import type { NextSeoProps } from "next-seo";

const BASE_URL = "https://davidruiz.dev";
const DEFAULT_TITLE = `David Ruiz 🎮 | Software Engineer`;
const DEFAULT_DESCRIPTION =
  "I'm a Software Engineer with 1 year of experience in web development using technologies such as React, Next.js, CSS, and Tailwind. Familiar with SQL databases and foundational knowledge of Prisma ORM and TRPC. Committed to building efficient and functional user interfaces, always prioritizing optimization and a great user experience in every project.";

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
