import { UiSlice } from "./types";

export const uiContent: { en: UiSlice; es: UiSlice } = {
  en: {
    ui: {
      experience: "Experience",
      education: "Education",
      links: "Links",
      statement: "Statement",
      skills: "Skills",
      certificates: "Certificates",
      visitSite: "Visit site",
      portfolioTitle: "PORTFOLIO",
      nav: [
        { url: "/resume", label: "Resume" },
        { url: "/portfolio", label: "Portfolio" },
        { url: "#contact", label: "Contact", contact: true },
      ],
      contact: {
        greeting: "Hi there 👋🏻",
        sendEmail: "Send me an email",
      },
    },
  },
  es: {
    ui: {
      experience: "Experiencia",
      education: "Educación",
      links: "Enlaces",
      statement: "Sobre mí",
      skills: "Habilidades",
      certificates: "Certificados",
      visitSite: "Visitar sitio",
      portfolioTitle: "PORTAFOLIO",
      nav: [
        { url: "/resume", label: "Currículum" },
        { url: "/portfolio", label: "Portafolio" },
        { url: "#contact", label: "Contacto", contact: true },
      ],
      contact: {
        greeting: "¡Hola! 👋🏻",
        sendEmail: "Envíame un correo",
      },
    },
  },
};