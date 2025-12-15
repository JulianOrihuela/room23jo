import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const LOCALES_SUPPORTED = ["en"];
export const DEFAULT_LOCALE = LOCALES_SUPPORTED[0]

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LOCALES_SUPPORTED,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
