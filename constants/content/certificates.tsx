export type CertificateItem = {
  title: string;
  issuer?: string;
  issueDate?: string;
  url: string;
};

export const certificates: CertificateItem[] = [
  {
    title: "Coursera WCAG Compliance: Web Accessibility BestPractices",
    issuer: "Coursera",
    url: "/pdf/Coursera 545QGWWP8X7T.pdf",
  },
  {
    title: "React Native Specialized Workshop",
    issuer: "Universidad Autónoma de Querétaro – Facultad de Informática",
    issueDate: "Nov 2021",
    url: "/pdf/UAQ - Taller React Native.pdf",
  },
  {
    title: "Oracle Specialized Workshop",
    issuer: "Universidad Autónoma de Querétaro – Facultad de Informática",
    issueDate: "Jun 2021",
    url: "/pdf/UAQ - Taller Oracle.pdf",
  },
  {
    title: "Node.js Specialized Workshop",
    issuer: "Universidad Autónoma de Querétaro – Facultad de Informática",
    issueDate: "Feb 2021",
    url: "/pdf/UAQ - Taller Node.js.pdf",
  },
];