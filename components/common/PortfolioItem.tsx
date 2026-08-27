import { classNames } from "@/utils/strings";
import { SkillTag } from "./SkillTag";
import { useEffect, useMemo, useRef, useState } from "react";

type PortfolioMedia = {
  imageUrl: string;
  videoUrl: string;
  label?: string;
  link?: string;
};

export type PortfolioItemProps = {
  title: string;
  description: string | JSX.Element;
  stack: string[];
  imageUrl?: string;
  videoUrl?: string;
  media?: PortfolioMedia[];
  link?: string;
  using?: string[];
  rtl?: boolean;
};

export const PortfolioItem = ({
  title,
  stack,
  description,
  imageUrl,
  videoUrl,
  media,
  link,
  rtl,
}: PortfolioItemProps) => {
  const normalizedMedia = useMemo<PortfolioMedia[]>(() => {
    if (media?.length) {
      return media;
    }

    if (imageUrl && videoUrl) {
      return [{ imageUrl, videoUrl }];
    }

    return [];
  }, [imageUrl, media, videoUrl]);

  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setActiveMediaIndex(0);
  }, [normalizedMedia.length]);

  const activeMedia =
    normalizedMedia[activeMediaIndex] || normalizedMedia[0] || null;
  const activeLink = activeMedia?.link || link;
  const activeLinkLabel = activeMedia?.label
    ? `Visit ${activeMedia.label}`
    : "Visit site";

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <div
      className={classNames(
        "flex w-full justify-evenly items-center flex-col gap-16 mb-24",
        !rtl ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      <div className="flex justify-center w-full lg:w-1/2">
        <div className="w-full max-w-xl">
          {activeMedia && (
            <div className="relative w-full aspect-video">
              <video
                ref={videoRef}
                loop
                muted
                playsInline
                poster={activeMedia.imageUrl}
                src={activeMedia.videoUrl}
                className="rounded-lg shadow-xl border border-slate-200 dark:border-none w-full h-full object-cover absolute top-0 left-0"
                preload="metadata"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          )}

          {normalizedMedia.length > 1 && (
            <div className="mt-3 grid grid-cols-2 gap-2">
              {normalizedMedia.map((item, idx) => {
                const isActive = idx === activeMediaIndex;

                return (
                  <button
                    key={`${item.imageUrl}-${idx}`}
                    type="button"
                    aria-label={`Show media ${idx + 1}${
                      item.label ? `: ${item.label}` : ""
                    }`}
                    className={classNames(
                      "relative aspect-video overflow-hidden rounded-md border transition-all",
                      isActive
                        ? "border-slate-700 dark:border-slate-200"
                        : "border-slate-300 dark:border-slate-700 opacity-50 hover:opacity-90"
                    )}
                    onClick={() => setActiveMediaIndex(idx)}
                  >
                    <img
                      src={item.imageUrl}
                      alt={`${title} preview ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                    {isActive && item.label && (
                      <span className="absolute bottom-0 left-0 right-0 bg-slate-900/70 py-1 text-center text-[11px] tracking-wider text-white">
                        {item.label}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full lg:w-1/2">
        <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-100">
          {title}
        </h2>
        <p className="text-xl">{description}</p>
        <p className="flex flex-wrap gap-2">
          {stack.map((tag) => (
            <SkillTag key={tag}>{tag}</SkillTag>
          ))}
        </p>
        {activeLink && (
          <a
            href={activeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(
              // link
              "py-1 px-2 w-fit relative",
              // underline decoration
              `after:contents-[''] after:transition-all after:w-10 after:h-0 after:block after:border 
              after:border-slate-500 after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2
              hover:after:w-[150%] hover:after:h-[150%] hover:after:-bottom-[25%]`
            )}
          >
            {activeLinkLabel}
          </a>
        )}
      </div>
    </div>
  );
};
