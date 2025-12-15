import Image from "next/image";
import {
  DropdownLang,
  HamburgerWrapper,
  HeaderWrapper,
  SidebarWrapper,
} from "../../client";
import { routes } from "@/src/config";
import { useTranslations } from "next-intl";
import { Link, LOCALES_SUPPORTED } from "@/src/i18n";
import { HeaderLinksMobile } from "./link-mobile";
import { Container } from "../ui";

const hiddenRoutes = ["home"];

export function Header() {
  const t = useTranslations();

  return (
    <>
      <Container>
        <HeaderWrapper>
          {/* DESKTOP */}
          <div className="hidden md:flex w-full flex-row items-center justify-between pt-[45px] pb-[26px]">
            <div className="cursor-pointer">
              <Link href="/">
                <Image
                  className="block lg:hidden"
                  src="/room23/logo_md.svg"
                  width={105.6}
                  height={26.4}
                  alt="Room23 logo"
                />
                <Image
                  className="hidden lg:block"
                  src="/room23/logo_md.svg"
                  width={132}
                  height={33}
                  alt="Room23 logo"
                />
              </Link>
            </div>

            <div className="flex flex-row items-center gap-x-12">
              {routes
                .filter((route) => !hiddenRoutes.includes(route.name))
                .map((route) => (
                  <div
                    key={route.name}
                    className="lowercase text-[32px] sm:text-[20px] lg:text-[32px] text-dark"
                  >
                    <Link href={route.url} className="hover-underline-animation left">{t(route.publicName)}</Link>
                  </div>
                ))}
              {LOCALES_SUPPORTED.length > 1 && <DropdownLang />}
            </div>
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex">
            <div className="flex flex-row items-center justify-between container mx-auto px-[18px] h-[80px]">
              <div className="cursor-pointer">
                <Link href="/">
                  <Image
                    src="/room23/logo_sm.svg"
                    width={80}
                    height={20}
                    alt="Room23 logo"
                  />
                </Link>
              </div>

              <div className="">
                <HamburgerWrapper />
              </div>
            </div>
          </div>
        </HeaderWrapper>
      </Container>

      <SidebarWrapper>
        <div className="flex flex-col container mx-auto px-[18px] gap-y-12 pt-[40px]">
          <HeaderLinksMobile />
        </div>
      </SidebarWrapper>
    </>
  );
}
