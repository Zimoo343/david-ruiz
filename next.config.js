/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    outputFileTracingIncludes: {
      "/api/resume-pdf": ["./node_modules/pdfkit/js/data/**"],
    },
  },
};

module.exports = nextConfig;
