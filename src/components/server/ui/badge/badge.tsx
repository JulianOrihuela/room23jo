import clsx from "clsx";
import { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLElement>;

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <div
      {...props}
      className={clsx(
        "bg-white rounded-2xl text-[16px] leading-[20px] text-black font-normal self-end py-2 px-4 capitalize md:text-[18px] md:leading-[18px]",
        className
      )}
    >
      {children}
    </div>
  );
}
