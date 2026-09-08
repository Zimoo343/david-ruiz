import { BigTitle } from "../components/common/BigTitle";
import { PageWrapper } from "@/components/common/PageWrapper";
import { PortfolioItem } from "@/components/common/PortfolioItem";
import { useContent } from "@/lib/i18n/LanguageProvider";

const Portfolio = () => {
  const { portfolioItems, ui } = useContent();

  return (
    <PageWrapper className="flex flex-col px-8 relative">
      <BigTitle>{ui.portfolioTitle}</BigTitle>
      <>
        {portfolioItems.map((item, idx) => (
          <PortfolioItem key={item.title} {...item} rtl={idx % 2 !== 0} />
        ))}
      </>
    </PageWrapper>
  );
};

export default Portfolio;
