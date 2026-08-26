import { PortfolioItemProps } from "@/components/common/PortfolioItem";
import { skills as sk } from "./skills";

export const portfolioItems: PortfolioItemProps[] = [
  {
    title: "EzTip",
    videoUrl: "/videos/eztip.mp4",
    imageUrl: "/videos/eztip.webp",
    description:
      "Worked on the donation-page form and profile view, which allows creators to receive support through Ethereum and smart contracts.",
    link: "https://www.eztip.xyz",
    stack: [sk.jsts, sk.react, sk.next, sk.solidity, sk.tw],
  },
  {
    title: "AltSocietyAI - SearchPromptly",
    videoUrl: "/videos/AltSocietyAI.mp4",
    imageUrl: "/videos/AltSocietyAI.webp",
    description:
      "Working mainly on UI/UX and Frontend Development using React and Tailwind CSS.",
    link: "https://altsociety.ai",
    stack: [sk.react, sk.jsts, sk.tw],
  },
  {
    title: "Ztek Admin Panel",
    videoUrl: "/videos/ztekadminpanel.mp4",
    imageUrl: "/videos/ztekadminpanel.webp",
    description:
      "Worked on the invoice form, autosend feature, and the dashboard as well as the UI for the platform.",
    stack: [sk.jsts, sk.react, sk.tw],
  },
  {
    title: "Ztek.dev",
    videoUrl: "/videos/ztekdev.mp4",
    imageUrl: "/videos/ztekdev.webp",
    description:
      "Worked on the landing page and blog page of the website for Ztek Interactive, LLC, a portfolio for the team, and a contact form, which is built using mainly React and Tailwind CSS.",
    link: "https://ztek.dev/",
    stack: [sk.react, sk.jsts, sk.tw, sk.wp],
  },
  {
    title: "Elsupermarkets & Fiestamart",
    description:
      "Handled routine WordPress maintenance, minor feature updates, and accessibility adjustments for El Supermarkets and Fiestamart.",
    media: [
      {
        videoUrl: "/videos/elsuper.mp4",
        imageUrl: "/videos/elsuper.webp",
        label: "El Supermarkets",
        link: "https://elsupermarkets.com/",
      },
      {
        videoUrl: "/videos/fiestamarket.mp4",
        imageUrl: "/videos/fiestamart.webp",
        label: "Fiestamart",
        link: "https://fiestamart.com/",
      },
    ],
    stack: [sk.wp, sk.jsts, sk.css],
  },
];
