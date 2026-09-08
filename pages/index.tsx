import { PageWrapper } from "@/components/common/PageWrapper";
import { Profile } from "@/components/profile";
import { useContent } from "@/lib/i18n/LanguageProvider";

const Homepage = () => {
  const { profile } = useContent();

  return (
    <PageWrapper className="flex flex-col items-center gap-12">
      <Profile homepage />
      <div className="lg:w-3/4 px-4 text-center">
        <p className="text-2xl">{profile.statement}</p>
      </div>
    </PageWrapper>
  );
};

export default Homepage;
