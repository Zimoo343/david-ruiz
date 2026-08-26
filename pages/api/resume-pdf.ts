import type { NextApiRequest, NextApiResponse } from "next";
import PDFDocument from "pdfkit";
import { CONTENT } from "@/constants/content";

const text = {
  resumeTitle: "Resume",
  profile: "Profile",
  experience: "Experience",
  education: "Education",
  certificates: "Certificates",
  skills: "Skills",
  portfolioHighlights: "Portfolio Highlights",
  socialLinks: "Social Links",
  stackLabel: "Stack",
  linksLabel: "Links",
};

const PORTFOLIO_URL = "https://david-ruiz.vercel.app/";

const textFromDescription = (description: string | JSX.Element): string => {
  if (typeof description === "string") {
    return description.replace(/\s+/g, " ").trim();
  }

  return "";
};

const collectItemLinks = (item: (typeof CONTENT.portfolioItems)[number]): string[] => {
  const links = new Set<string>();

  if (item.link) {
    links.add(item.link);
  }

  if (item.media?.length) {
    item.media.forEach((mediaItem) => {
      if (mediaItem.link) {
        links.add(mediaItem.link);
      }
    });
  }

  return Array.from(links);
};

const sectionTitle = (doc: PDFKit.PDFDocument, title: string) => {
  doc.moveDown();
  doc.font("Helvetica-Bold").fontSize(14).text(title);
  doc.moveTo(doc.x, doc.y + 2).lineTo(545, doc.y + 2).stroke();
  doc.moveDown(0.6);
};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const resumeName = CONTENT.fullName + (CONTENT.lastName ? ` ${CONTENT.lastName}` : "");
  const baseFileName = resumeName.replace(/[^a-zA-Z0-9]+/g, "_").toUpperCase();
  const fileName = `${baseFileName}_CV_EN.pdf`;

  const doc = new PDFDocument({
    size: "A4",
    margin: 50,
    info: {
      Title: `${resumeName} ${text.resumeTitle}`,
      Author: resumeName,
    },
  });

  const chunks: Buffer[] = [];

  doc.on("data", (chunk: Buffer) => {
    chunks.push(chunk);
  });

  doc.on("end", () => {
    const pdf = Buffer.concat(chunks);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
    res.status(200).send(pdf);
  });

  doc.font("Helvetica-Bold").fontSize(24).text(resumeName, { align: "center" });
  doc.font("Helvetica").fontSize(13).text(CONTENT.jobTitle, { align: "center" });
  doc
    .fontSize(10)
    .fillColor("#333")
    .text(CONTENT.location, { align: "center" })
    .fillColor("black");

  sectionTitle(doc, text.profile);
  doc.font("Helvetica").fontSize(11).text(CONTENT.resumeStatement, {
    align: "left",
    lineGap: 3,
  });

  sectionTitle(doc, text.experience);
  CONTENT.jobExperiences.forEach((job) => {
    doc
      .font("Helvetica-Bold")
      .fontSize(12)
      .text(`${job.jobTitle} - ${job.companyName}`);
    doc
      .font("Helvetica")
      .fontSize(10)
      .fillColor("#555")
      .text(`${job.startDate} - ${job.endDate} | ${job.location}`)
      .fillColor("black");
    if (job.children) {
      doc.fontSize(10.5).text(String(job.children), { lineGap: 2 });
    }
    doc.moveDown(0.6);
  });

  sectionTitle(doc, text.education);
  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .text(`${CONTENT.education.jobTitle} - ${CONTENT.education.companyName}`);
  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor("#555")
    .text(
      `${CONTENT.education.startDate} - ${CONTENT.education.endDate} | ${CONTENT.education.location}`
    )
    .fillColor("black");

  if (CONTENT.certificates.length) {
    sectionTitle(doc, text.certificates);
    CONTENT.certificates.forEach((certificate) => {
      const certMeta = [certificate.issuer, certificate.issueDate]
        .filter(Boolean)
        .join(" • ");
      doc
        .font("Helvetica")
        .fontSize(10)
        .text(certMeta ? `${certificate.title} - ${certMeta}` : certificate.title);
    });
  }

  sectionTitle(doc, text.skills);
  doc
    .font("Helvetica")
    .fontSize(10.5)
    .text(Object.values(CONTENT.skills).join(" • "), {
      lineGap: 2,
    });

  sectionTitle(doc, text.portfolioHighlights);
  CONTENT.portfolioItems.forEach((item) => {
    const description = textFromDescription(item.description);
    const links = collectItemLinks(item);

    doc.font("Helvetica-Bold").fontSize(11).text(item.title);

    if (description) {
      doc.font("Helvetica").fontSize(10).text(description, { lineGap: 2 });
    }

    if (item.stack?.length) {
      doc
        .font("Helvetica")
        .fontSize(9.5)
        .fillColor("#555")
        .text(`${text.stackLabel}: ${item.stack.join(", ")}`)
        .fillColor("black");
    }

    if (links.length) {
      doc
        .font("Helvetica")
        .fontSize(9.5)
        .fillColor("#555")
        .text(`${text.linksLabel}: ${links.join(" | ")}`)
        .fillColor("black");
    }

    doc.moveDown(0.7);
  });

  sectionTitle(doc, text.socialLinks);
  doc.font("Helvetica").fontSize(10).text(`Portfolio: ${PORTFOLIO_URL}`);
  CONTENT.socialLinks
    .filter((item) => item.title !== "Resume")
    .forEach((item) => {
      doc.font("Helvetica").fontSize(10).text(`${item.title}: ${item.url}`);
    });

  doc.end();
}
