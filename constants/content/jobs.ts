import { JobsSlice } from "./types";

export const jobsContent: { en: JobsSlice; es: JobsSlice } = {
  en: {
    jobs: [
      {
        image: "/images/work/ztek.webp",
        jobTitle: "Software Engineer",
        companyName: "Ztek Interactive, LLC",
        startDate: "August 2023",
        endDate: "now",
        location: "Austin, Tx (Remote)",
        children:
          "At Ztek Interactive, I work as a Software Engineer, specializing in frontend development and UI/UX design with a focus on TypeScript. My projects include the Ztek Admin Panel, a platform for managing legal documents, invoices, and meetings, primarily built using TypeScript, Tailwind, CSS, and Prisma DB for data handling. Additionally, we've developed EzTip, a web3 donation platform that enables creators to receive support through Ethereum and smart contracts, utilizing TypeScript, Tailwind, and blockchain technologies. My role involves designing efficient, user-friendly interfaces and providing backend support to build cohesive, secure applications.",
      },
    ],
  },
  es: {
    jobs: [
      {
        image: "/images/work/ztek.webp",
        jobTitle: "Ingeniero de Software",
        companyName: "Ztek Interactive, LLC",
        startDate: "Agosto 2023",
        endDate: "actualidad",
        location: "Austin, Tx (Remoto)",
        children:
          "En Ztek Interactive trabajo como Ingeniero de Software, especializándome en desarrollo frontend y diseño UI/UX con un enfoque en TypeScript. Mis proyectos incluyen el Panel de Administración de Ztek, una plataforma para gestionar documentos legales, facturas y reuniones, construida principalmente con TypeScript, Tailwind, CSS y Prisma DB para el manejo de datos. Además, desarrollamos EzTip, una plataforma de donaciones web3 que permite a los creadores recibir apoyo mediante Ethereum y contratos inteligentes, utilizando TypeScript, Tailwind y tecnologías blockchain. Mi rol implica diseñar interfaces eficientes y fáciles de usar, así como brindar soporte backend para construir aplicaciones cohesivas y seguras.",
      },
    ],
  },
};