import { SocialsSlice } from "./types";

export const socialsContent: { en: SocialsSlice; es: SocialsSlice } = {
  en: {
    socialLinks: [
      {
        image: "/images/social/resume.webp",
        title: "Resume",
        subtitle: "Save as PDF",
        url: "/resume",
        printOnClick: true,
        hiddenForPrint: true,
      },
      {
        image: "/images/social/linkedin.webp",
        title: "LinkedIn",
        subtitle: "linkedin.com/in/zimoo343",
        url: "https://www.linkedin.com/in/zimoo343",
      },
      {
        image: "/images/social/github.webp",
        title: "GitHub",
        subtitle: "github.com/zimoo343",
        url: "https://github.com/zimoo343",
      },
      {
        image: "/images/social/x.webp",
        title: "X (formerly Twitter)",
        subtitle: "x.com/zimoo343",
        url: "https://x.com/zimoo343",
      },
      {
        image: "/images/social/TlyLogo.webp",
        title: "Talent ID",
        subtitle: "https://talently.tech/ly/d-ruiz-lara",
        url: "https://talently.tech/ly/d-ruiz-lara",
        hiddenForPrint: true,
      },
    ],
  },
  es: {
    socialLinks: [
      {
        image: "/images/social/resume.webp",
        title: "Currículum",
        subtitle: "Guardar como PDF",
        url: "/resume",
        printOnClick: true,
        hiddenForPrint: true,
      },
      {
        image: "/images/social/linkedin.webp",
        title: "LinkedIn",
        subtitle: "linkedin.com/in/zimoo343",
        url: "https://www.linkedin.com/in/zimoo343",
      },
      {
        image: "/images/social/github.webp",
        title: "GitHub",
        subtitle: "github.com/zimoo343",
        url: "https://github.com/zimoo343",
      },
      {
        image: "/images/social/x.webp",
        title: "X (formerly Twitter)",
        subtitle: "x.com/zimoo343",
        url: "https://x.com/zimoo343",
      },
      {
        image: "/images/social/TlyLogo.webp",
        title: "Talent ID",
        subtitle: "https://talently.tech/ly/d-ruiz-lara",
        url: "https://talently.tech/ly/d-ruiz-lara",
        hiddenForPrint: true,
      },
    ],
  },
};