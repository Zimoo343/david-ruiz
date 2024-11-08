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
    title: "Ztek Admin Panel",
    videoUrl: "/videos/ztekadminpanel.mp4",
    imageUrl: "/videos/ztekadminpanel.webp",
    description:
      "Worked on the invoice form, autosend feature, and the dashboard as well as the UI for the platform.",
    stack: [sk.jsts, sk.react, sk.tw],
  },
];
