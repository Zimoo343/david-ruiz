import { HeaderMenu } from "./HeaderMenu";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center w-full max-w-7xl justify-between p-4 print:hidden mx-auto">
      <Link href="/">
        <img
          alt="David Ruiz"
          src="/images/logo.webp"
          loading="eager"
          decoding="async"
          className="w-24 dark:invert dark:brightness-0"
        />
      </Link>
      <HeaderMenu />
    </header>
  );
};
