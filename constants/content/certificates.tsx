export type CertificateItem = {
  title: string;
  issuer?: string;
  issueDate?: string;
  url: string;
};

export const certificates: CertificateItem[] = [
  {
    title: "Curso de Introduccion a Tailwind",
    issuer: "Certificado Introducción a Tailwind",
    url: "/pdf/Certificado - Curso de Introducción a Tailwind.pdf",
  },
  {
    title: "Introduccion a Figma y Diseno de Interfaces",
    issuer: "Certificado Figma y Diseño de Interfaces",
    url: "/pdf/Certificado - Introducción a Figma y diseño de interfaces.pdf",
  },
  {
    title: "Vue.js 3",
    issuer: "Certificado Vue.js 3",
    url: "/pdf/Certificado - VueJs 3.pdf",
  },
  {
    title: "Coursera WCAG Compliance: Web Accessibility BestPractices",
    issuer: "Coursera",
    url: "/pdf/Coursera 545QGWWP8X7T.pdf",
  },

];