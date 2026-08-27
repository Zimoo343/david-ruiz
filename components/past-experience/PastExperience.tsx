import { CONTENT } from "@/constants/content";
import { JobExperience } from "@/components/common/JobExperience";
import { ContentBlock } from "@/components/common/ContentBlock";

const { education, jobExperiences, certificates } = CONTENT;

export const PastExperience = () => (
  <>
    <ContentBlock title="Experience">
      {jobExperiences.map((position) => (
        <JobExperience key={position.companyName} {...position} />
      ))}
    </ContentBlock>
    <ContentBlock title="Education">
      <JobExperience {...education} />
      {certificates.length > 0 && (
        <div className="mt-6 pl-24 print:pl-0">
          <h5 className="text-lg font-semibold mb-3">Certificates</h5>
          <ul className="flex flex-col gap-2">
            {certificates.map((certificate) => (
              <li key={`${certificate.title}-${certificate.url}`}>
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-slate-400 hover:decoration-slate-700"
                >
                  {certificate.title}
                </a>
                {(certificate.issuer || certificate.issueDate) && (
                  <span className="text-sm text-slate-500">{` - ${[
                    certificate.issuer,
                    certificate.issueDate,
                  ]
                    .filter(Boolean)
                    .join(" • ")}`}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </ContentBlock>
  </>
);
