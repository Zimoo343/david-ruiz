import { useContent } from "@/lib/i18n/LanguageProvider";
import { classNames } from "@/utils/strings";
import Link from "next/link";

export const HeaderMenu = () => {
  const { ui } = useContent();

  return (
    <div className="flex items-center">
      <ul className="flex items-center gap-1 sm:gap-2 lg:gap-4 mr-0 lg:mr-2">
        {ui.nav.map(({ url, label, contact }) => (
          <li
            key={url}
            className="uppercase font-light text-[11px] sm:text-sm lg:text-md"
          >
            <Link
              href={url}
              className={classNames(
                "hover:underline",
                contact ? "contact-trigger" : "",
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
