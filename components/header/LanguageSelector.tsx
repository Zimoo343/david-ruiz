import { Locale } from "@/constants/content";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useEffect, useRef } from "react";

const OPTIONS: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
];

export const LanguageSelector = () => {
  const { locale, setLocale } = useLanguage();
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

  const selectLocale = (value: Locale) => {
    setLocale(value);
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  return (
    <details ref={detailsRef} className="language-selector group relative">
      <summary className="list-none cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-lg uppercase font-light text-sm lg:text-md [&::-webkit-details-marker]:hidden">
        {locale}
        <svg
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-slate-500 dark:text-slate-300 transition-transform duration-200 group-open:rotate-180"
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
      </summary>
      <div className="absolute right-0 top-full z-20 mt-2 w-28 overflow-hidden rounded-lg border border-slate-300/80 dark:border-slate-600 bg-white dark:bg-slate-800 shadow-2xl">
        {OPTIONS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => selectLocale(value)}
            className={`block w-full px-4 py-2 text-left text-sm uppercase transition-colors ${
              value === locale
                ? "bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900"
                : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/70"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </details>
  );
};
