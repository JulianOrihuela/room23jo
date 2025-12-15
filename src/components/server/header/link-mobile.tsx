"use client";
import { routes } from "@/src/config";
import { Link } from "@/src/i18n";
import { useHeaderContext } from "../../client";
import { useTranslations } from "next-intl";

const hiddenRoutes = ["home"];

export function HeaderLinksMobile() {
  const { setIsOpenSidebar } = useHeaderContext();
  const t = useTranslations();
  return (
    <>
      {routes
        .filter((route) => !hiddenRoutes.includes(route.name))
        .map((route) => (
          <div key={route.name} className="lowercase text-[40px] text-dark">
            <Link onClick={() => setIsOpenSidebar(false)} href={route.url}>
              {t(route.publicName)}
            </Link>
          </div>
        ))}
    </>
  );
}
