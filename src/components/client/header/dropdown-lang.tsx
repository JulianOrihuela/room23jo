"use client";
import { useParams } from "next/navigation";
import { Dropdown } from "../ui";
import { LOCALES_SUPPORTED, usePathname, useRouter } from "@/src/i18n";
import clsx from "clsx";
import { WorldIcon } from "../../server";

export function DropdownLang() {
  const params = useParams<{ locale: string }>();
  const pathname = usePathname();
  const router = useRouter();

  const handleChangeLocale = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <Dropdown
      placeholder={
        <div className="text-2xl leading-9 uppercase flex flex-row gap-1 items-center">
          <WorldIcon />
          <span>{params.locale}</span>
        </div>
      }
      items={LOCALES_SUPPORTED.map((locale) => ({
        children: (
          <div
            onClick={() => handleChangeLocale(locale)}
            className={clsx(
              "text-2xl leading-9 uppercase flex flex-row gap-1 items-center px-[18px] py-2.5 cursor-pointer",
              { "bg-[#E3E3E3]": locale === params.locale }
            )}
          >
            <WorldIcon />
            <span>{locale}</span>
            {locale === params.locale && (
              <span className="w-2 h-2 bg-[#9747FF] rounded-full"></span>
            )}
          </div>
        ),
      }))}
    />
  );
}
