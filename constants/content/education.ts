import { EducationSlice } from "./types";

export const educationContent: { en: EducationSlice; es: EducationSlice } = {
  en: {
    education: {
      image: "/images/work/uaq.webp",
      jobTitle: "B.Sc. Software Engineering",
      companyName: "Universidad Autonoma de Queretaro",
      startDate: "Aug 2020",
      endDate: "Dec 2024",
      location: "Querétaro, México",
      children: "",
    },
    certificates: [
      {
        title: "Coursera WCAG Compliance: Web Accessibility Best Practices",
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
    ],
  },
  es: {
    education: {
      image: "/images/work/uaq.webp",
      jobTitle: "Licenciatura en Ingeniería de Software",
      companyName: "Universidad Autonoma de Queretaro",
      startDate: "Ago 2020",
      endDate: "Dic 2024",
      location: "Querétaro, México",
      children: "",
    },
    certificates: [
      {
        title:
          "Coursera Cumplimiento WCAG: Mejores Prácticas de Accesibilidad Web",
        issuer: "Coursera",
        url: "/pdf/Coursera 545QGWWP8X7T.pdf",
      },
      {
        title: "Taller Especializado de React Native",
        issuer: "Universidad Autónoma de Querétaro – Facultad de Informática",
        issueDate: "Nov 2021",
        url: "/pdf/UAQ - Taller React Native.pdf",
      },
      {
        title: "Taller Especializado de Oracle",
        issuer: "Universidad Autónoma de Querétaro – Facultad de Informática",
        issueDate: "Jun 2021",
        url: "/pdf/UAQ - Taller Oracle.pdf",
      },
      {
        title: "Taller Especializado de Node.js",
        issuer: "Universidad Autónoma de Querétaro – Facultad de Informática",
        issueDate: "Feb 2021",
        url: "/pdf/UAQ - Taller Node.js.pdf",
      },
    ],
  },
};