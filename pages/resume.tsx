import { ContentBlock } from "@/components/common/ContentBlock";
import { PageWrapper } from "@/components/common/PageWrapper";
import { SkillTag } from "@/components/common/SkillTag";
import { PastExperience } from "@/components/past-experience";
import { Profile } from "@/components/profile";
import { SocialLinks } from "@/components/social-links";
import { useContent } from "@/lib/i18n/LanguageProvider";

const Resume = () => {
  const { profile, skills, ui } = useContent();

  return (
    <PageWrapper className="flex flex-col lg:flex-row gap-8 relative">
      <div className="w-full lg:w-2/5 lg:min-h-screen">
        <div className="flex flex-col gap-12 print:gap-4 sticky top-12">
          <Profile />
          <ContentBlock title={ui.statement}>
            <p>{profile.statement}</p>
          </ContentBlock>
          <ContentBlock title={ui.skills}>
            <p className="print:hidden flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </p>
            <p className="print:block hidden">{skills.join(", ")}</p>
          </ContentBlock>
          <div className="hidden lg:block">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 print:gap-4 w-full lg:w-3/5 lg:min-h-screen">
        <PastExperience />
        <div className="block lg:hidden">
          <SocialLinks />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Resume;
