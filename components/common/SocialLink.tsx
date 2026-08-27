import { classNames } from "@/utils/strings";
import Image from "next/image";
import { useEffect, useRef } from "react";

export type SocialLinkProps = {
  image: string;
  title: string;
  subtitle?: string;
  url: string;
  confirmDownload?: boolean;
  hiddenForPrint?: boolean;
};

export const SocialLink = ({
  image,
  title,
  url,
  subtitle,
  confirmDownload,
  hiddenForPrint,
}: SocialLinkProps) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const detailsEl = detailsRef.current;
      if (!detailsEl?.open) {
        return;
      }

      const target = event.target as Node;
      if (!detailsEl.contains(target)) {
        detailsEl.open = false;
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && detailsRef.current?.open) {
        detailsRef.current.open = false;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  if (confirmDownload) {
    return (
      <details
        ref={detailsRef}
        className={classNames(
          "social-link group relative block w-1/2 lg:w-full",
          hiddenForPrint ? "print:hidden" : ""
        )}
      >
        <summary
          className="list-none cursor-pointer mb-4 rounded-lg px-2 py-1 lg:hover:translate-x-2 transition-all [&::-webkit-details-marker]:hidden"
          aria-label={`Open ${title} download confirmation`}
        >
          <div className="flex gap-4 items-center justify-between">
            <div className="flex gap-4 items-center min-w-0">
              <Image
                src={image}
                alt={title}
                height={256}
                width={256}
                className="rounded-md shadow-md w-10 print:w-8 shrink-0"
              />
              <div className="flex flex-col gap-1 text-slate-700 dark:text-slate-200 min-w-0">
                <span className="tracking-wider">{title}</span>
                <span className="text-xs tracking-wider hidden sm:block truncate">
                  {subtitle || url}
                </span>
              </div>
            </div>
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-slate-500 dark:text-slate-300 transition-transform duration-200 group-open:rotate-180 shrink-0"
              aria-hidden="true"
            >
              <path
                d="M4.5 7L10 12.5L15.5 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </summary>

        <div className="absolute left-0 right-auto top-full z-20 -mt-1 w-[80vw] max-w-sm rounded-xl border border-slate-300/80 dark:border-slate-600 bg-white dark:bg-slate-800 shadow-2xl overflow-hidden lg:right-0 lg:w-full lg:max-w-none">
          <div className="flex flex-col gap-3 p-4">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Download {title} as PDF?
            </p>
            <div className="flex gap-2">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeDetails}
                className="flex-1 rounded-md bg-slate-800 dark:bg-slate-200 py-2 text-center text-sm font-medium text-white dark:text-slate-900 hover:opacity-90 transition-opacity"
              >
                Download
              </a>
              <button
                type="button"
                onClick={closeDetails}
                className="flex-1 rounded-md border border-slate-300 dark:border-slate-600 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/70 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </details>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(
        "social-link block w-1/2 lg:w-full",
        hiddenForPrint ? "print:hidden" : ""
      )}
    >
      <div className="flex gap-4 items-center mb-4 lg:hover:translate-x-2 transition-all">
        <Image
          src={image}
          alt={title}
          height={256}
          width={256}
          className="rounded-md shadow-md w-10 print:w-8"
        />
        <div className="flex flex-col gap-1 text-slate-700 dark:text-slate-200">
          <span className="tracking-wider">{title}</span>
          <span className="text-xs tracking-wider hidden sm:block">
            {subtitle || url}
          </span>
        </div>
      </div>
    </a>
  );
};
