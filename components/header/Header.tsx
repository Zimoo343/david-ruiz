import { HeaderMenu } from "./HeaderMenu";
import { LanguageSelector } from "./LanguageSelector";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center w-full max-w-7xl justify-between gap-x-2 p-2 sm:p-4 print:hidden mx-auto">
      <Link href="/">
        <Image
          alt="David Ruiz"
          src="/images/logo.webp"
          width={164}
          height={68}
          className="w-16 dark:invert dark:brightness-0"
        />
      </Link>
      <div className="flex items-center gap-1 sm:gap-4 lg:gap-6">
        <HeaderMenu />
        <LanguageSelector />
      </div>
    </header>
  );
};
