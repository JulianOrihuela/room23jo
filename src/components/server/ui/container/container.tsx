import { cn } from "@/src/utils/cn";
import { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLElement>;

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div {...props} className={cn("mx-4 md:mx-6", className)}>
      {children}
    </div>
  );
}
