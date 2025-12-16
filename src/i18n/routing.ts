import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const LOCALES_SUPPORTED = ["en"] as const;
export const DEFAULT_LOCALE = "en";

export const routing = defineRouting({
  locales: LOCALES_SUPPORTED,
  defaultLocale: DEFAULT_LOCALE,
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
