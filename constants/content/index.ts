import { JobExperienceProps } from "@/components/common/JobExperience";
import { PortfolioItemProps } from "@/components/common/PortfolioItem";
import { SocialLinkProps } from "@/components/common/SocialLink";

export type Locale = "en" | "es";

type CertificateItem = {
  title: string;
  issuer?: string;
  issueDate?: string;
  url: string;
};

type NavItem = {
  url: string;
  label: string;
  contact?: boolean;
};

type LanguageContent = {
  profile: {
    fullName: string;
    lastName: string;
    jobTitle: string;
    statement: string;
    resumeStatement: string;
    location: string;
  };
  skills: string[];
  jobs: JobExperienceProps[];
  education: JobExperienceProps;
  certificates: CertificateItem[];
  portfolioItems: PortfolioItemProps[];
  socialLinks: SocialLinkProps[];
  seo: {
    title: string;
    description: string;
  };
  ui: {
    experience: string;
    education: string;
    links: string;
    statement: string;
    skills: string;
    certificates: string;
    visitSite: string;
    portfolioTitle: string;
    nav: NavItem[];
    contact: {
      greeting: string;
      sendEmail: string;
    };
  };
};

const SKILLS = [
  "Javascript / Typescript",
  "React",
  "Tailwind CSS",
  "CSS",
  "Java",
  "React Native",
  "Next.js",
  "Node.js",
  "SQL",
  "No-SQL",
  "Solidity (Basic)",
  "Python",
  "Vite",
  "Figma",
  "Wordpress",
];

export const content: { en: LanguageContent; es: LanguageContent } = {
  en: {
    profile: {
      fullName: "David Ruiz",
      lastName: "Lara", // Last name just for CV generation
      jobTitle: "Software Engineer",
      statement:
        "I'm a Software Engineer with 2 years of experience in web development, using technologies such as React, Next.js, CSS, and Tailwind. Skilled in working with SQL databases and experienced with modern tools like Prisma ORM and TRPC. I'm passionate about creating efficient, functional, and visually appealing user interfaces, with a strong focus on optimization and delivering an exceptional user experience in every project.",
      resumeStatement:
        "I'm a Software Engineer with 2 years of experience in web development, using technologies such as React, Next.js, CSS, and Tailwind. Skilled in working with SQL databases and experienced with modern tools like Prisma ORM and TRPC. I'm passionate about creating efficient, functional, and visually appealing user interfaces, with a strong focus on optimization and delivering an exceptional user experience in every project.",
      location: "Los Reyes de Salgado, Michoacán. México",
    },
    skills: SKILLS,
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
    portfolioItems: [
      {
        title: "EzTip",
        videoUrl: "/videos/eztip.mp4",
        imageUrl: "/videos/eztip.webp",
        description:
          "Worked on the donation-page form and profile view, which allows creators to receive support through Ethereum and smart contracts.",
        link: "https://www.eztip.xyz",
        stack: [
          "Javascript / Typescript",
          "React",
          "Next.js",
          "Solidity (Basic)",
          "Tailwind CSS",
        ],
      },
      {
        title: "AltSocietyAI - SearchPromptly",
        videoUrl: "/videos/AltSocietyAI.mp4",
        imageUrl: "/videos/AltSocietyAI.webp",
        description:
          "Working mainly on UI/UX and Frontend Development using React and Tailwind CSS.",
        link: "https://altsociety.ai",
        stack: ["React", "Javascript / Typescript", "Tailwind CSS"],
      },
      {
        title: "Ztek Admin Panel",
        videoUrl: "/videos/ztekadminpanel.mp4",
        imageUrl: "/videos/ztekadminpanel.webp",
        description:
          "Worked on the invoice form, autosend feature, and the dashboard as well as the UI for the platform.",
        stack: ["Javascript / Typescript", "React", "Tailwind CSS"],
      },
      {
        title: "Ztek.dev",
        videoUrl: "/videos/ztekdev.mp4",
        imageUrl: "/videos/ztekdev.webp",
        description:
          "Worked on the landing page and blog page of the website for Ztek Interactive, LLC, a portfolio for the team, and a contact form, which is built using mainly React and Tailwind CSS.",
        link: "https://ztek.dev/",
        stack: [
          "React",
          "Javascript / Typescript",
          "Tailwind CSS",
          "Wordpress",
        ],
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
        stack: ["Wordpress", "Javascript / Typescript", "CSS"],
      },
    ],
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
    seo: {
      title: "David Ruiz | Software Engineer",
      description:
        "I'm a Software Engineer with 2 years of experience in web development, using technologies such as React, Next.js, CSS, and Tailwind. Skilled in working with SQL databases and experienced with modern tools like Prisma ORM and TRPC. I'm passionate about creating efficient, functional, and visually appealing user interfaces, with a strong focus on optimization and delivering an exceptional user experience in every project.",
    },
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
    profile: {
      fullName: "David Ruiz",
      lastName: "Lara", // Apellido solo para generación de CV
      jobTitle: "Ingeniero de Software",
      statement:
        "Soy Ingeniero de Software con 2 años de experiencia en desarrollo web, usando tecnologías como React, Next.js, CSS y Tailwind. Hábil en el trabajo con bases de datos SQL y con experiencia en herramientas modernas como Prisma ORM y TRPC. Me apasiona crear interfaces de usuario eficientes, funcionales y visualmente atractivas, con un fuerte enfoque en la optimización y en brindar una experiencia de usuario excepcional en cada proyecto.",
      resumeStatement:
        "Soy Ingeniero de Software con 2 años de experiencia en desarrollo web, usando tecnologías como React, Next.js, CSS y Tailwind. Hábil en el trabajo con bases de datos SQL y con experiencia en herramientas modernas como Prisma ORM y TRPC. Me apasiona crear interfaces de usuario eficientes, funcionales y visualmente atractivas, con un fuerte enfoque en la optimización y en brindar una experiencia de usuario excepcional en cada proyecto.",
      location: "Los Reyes de Salgado, Michoacán. México",
    },
    skills: SKILLS,
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
    portfolioItems: [
      {
        title: "EzTip",
        videoUrl: "/videos/eztip.mp4",
        imageUrl: "/videos/eztip.webp",
        description:
          "Trabajé en el formulario de la página de donaciones y en la vista de perfil, que permite a los creadores recibir apoyo mediante Ethereum y contratos inteligentes.",
        link: "https://www.eztip.xyz",
        stack: [
          "Javascript / Typescript",
          "React",
          "Next.js",
          "Solidity (Basic)",
          "Tailwind CSS",
        ],
      },
      {
        title: "AltSocietyAI - SearchPromptly",
        videoUrl: "/videos/AltSocietyAI.mp4",
        imageUrl: "/videos/AltSocietyAI.webp",
        description:
          "Trabajando principalmente en UI/UX y desarrollo frontend usando React y Tailwind CSS.",
        link: "https://altsociety.ai",
        stack: ["React", "Javascript / Typescript", "Tailwind CSS"],
      },
      {
        title: "Ztek Admin Panel",
        videoUrl: "/videos/ztekadminpanel.mp4",
        imageUrl: "/videos/ztekadminpanel.webp",
        description:
          "Trabajé en el formulario de facturas, la función de envío automático, el panel de control y la interfaz de la plataforma.",
        stack: ["Javascript / Typescript", "React", "Tailwind CSS"],
      },
      {
        title: "Ztek.dev",
        videoUrl: "/videos/ztekdev.mp4",
        imageUrl: "/videos/ztekdev.webp",
        description:
          "Trabajé en la página de inicio y la de blog del sitio de Ztek Interactive, LLC, un portafolio para el equipo y un formulario de contacto, construido principalmente con React y Tailwind CSS.",
        link: "https://ztek.dev/",
        stack: [
          "React",
          "Javascript / Typescript",
          "Tailwind CSS",
          "Wordpress",
        ],
      },
      {
        title: "Elsupermarkets & Fiestamart",
        description:
          "Me encargué del mantenimiento rutinario de WordPress, actualizaciones menores de funciones y ajustes de accesibilidad para El Supermarkets y Fiestamart.",
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
        stack: ["Wordpress", "Javascript / Typescript", "CSS"],
      },
    ],
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
    seo: {
      title: "David Ruiz | Ingeniero de Software",
      description:
        "Soy Ingeniero de Software con 2 años de experiencia en desarrollo web, usando tecnologías como React, Next.js, CSS y Tailwind. Hábil en el trabajo con bases de datos SQL y con experiencia en herramientas modernas como Prisma ORM y TRPC. Me apasiona crear interfaces de usuario eficientes, funcionales y visualmente atractivas, con un fuerte enfoque en la optimización y en brindar una experiencia de usuario excepcional en cada proyecto.",
    },
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
