import { ContentBlock } from "@/components/common/ContentBlock";
import { SocialLink } from "@/components/common/SocialLink";
import { useContent } from "@/lib/i18n/LanguageProvider";

export const SocialLinks = () => {
  const { socialLinks, ui } = useContent();

  return (
    <ContentBlock title={ui.links} className="flex flex-wrap lg:flex-col">
      {socialLinks.map((link) => (
        <SocialLink key={link.title} {...link} />
      ))}
    </ContentBlock>
  );
};
