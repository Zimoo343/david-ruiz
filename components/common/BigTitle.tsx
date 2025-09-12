import { classNames } from "@/utils/strings";
import { PropsWithChildren } from "react";

type BigTitleProps = PropsWithChildren & {
  className?: string;
};

export const BigTitle = ({ children, className }: BigTitleProps) => (
  <h1
    className={classNames(
      "text-5xl sm:text-[120px] lg:text-[200px] text-slate-200 dark:text-slate-700 font-bold text-center my-12 lg:my-32",
      className ? className : ""
    )}
  >
    {children}
  </h1>
);
