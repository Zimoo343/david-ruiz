import { buildSeo } from "@/constants/seo";
import { useContent, useLanguage } from "@/lib/i18n/LanguageProvider";
import { classNames } from "@/utils/strings";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { PropsWithChildren } from "react";
import { ContactModal } from "../header/ContactModal";

type PageWrapperProps = PropsWithChildren & {
  className?: string;
};

export const PageWrapper = ({ children, className }: PageWrapperProps) => {
  const { seo } = useContent();
  const { locale } = useLanguage();

  return (
    <>
      <DefaultSeo {...buildSeo(seo, locale)} />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article
        className={classNames("min-h-fit py-8", className ? className : "")}
      >
        {children}
      </article>
      <ContactModal />
    </>
  );
};
