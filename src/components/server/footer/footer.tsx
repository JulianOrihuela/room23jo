import { useTranslations } from "next-intl";
import { BlockCountry, BlockSocial, Container } from "../ui";
import { HTMLAttributes } from "react";
import clsx from "clsx";
import Image from "next/image";
import { routes, socials } from "@/src/config";
import { SocialTypes } from "@/src/modules/social";
import { GoArrowUpRight } from "react-icons/go";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "@/src/i18n";

type FooterProps = HTMLAttributes<HTMLElement>;

const EMAIL = socials.find(
  (social) => social.type === SocialTypes.EMAIL
)?.value;

const INSTAGRAM = socials.find(
  (social) => social.type === SocialTypes.INSTAGRAM
)?.value;

const LINKEDIN = socials.find(
  (social) => social.type === SocialTypes.LINKEDIN
)?.value;

export function Footer({ className, ...props }: FooterProps) {
  const t = useTranslations();
  const allRightsMessage = `© ${new Date().getFullYear()}, ${t(
    "common.all-rights-reserved"
  )}`;

  return (
    <div
      {...props}
      className={clsx(
        "bg-[#010101] py-[53px] xl:py-[60px] mt-[64px] rounded-tr-3xl xl:rounded-tr-4xl text-white",
        className
      )}
    >
      <Container className="flex flex-col xl:flex-row justify-between">
        {/* MESSAGE */}
        <div className="flex flex-col xl:max-w-[650px] relative">
          <Image
            className="xl:absolute left-0 top-0"
            src="/room23/logo_lg.svg"
            width={132}
            height={33}
            alt="Room23 logo"
          />
          <div className="flex flex-col mt-[37px] xl:mt-[63px]">
            <p className="text-white font-medium xl:font-normal text-[48px] xl:text-[64px] leading-[58px] xl:leading-[64px]">
              {t("sections.footer.title")}
            </p>
            <p className="text-white opacity-50 text-[24px] leading-[24px] mt-[18px] xl:mt-[32px] font-questrial">
              {t("sections.footer.subtitle")}
            </p>
          </div>

          <a
            className="text-[25px] xl:text-[48px] text-purple flex items-center mt-[20px] xl:mt-[63px]"
            href={`mailto:${EMAIL}`}
          >
            <span className="underline font-medium xl:font-normal">
              {EMAIL}
            </span>
            <GoArrowUpRight />
          </a>

          <p className="text-[#545454] text-[20px] xl:text-2xl leading-6 mt-[64px] hidden xl:block">
            {allRightsMessage}
          </p>
        </div>

        {/* SOCIAL */}
        <div className="flex flex-col mt-[43px] xl:mt-[63px]">
          <p className="text-[20px] leading-6 xl:text-xl xl:leading-[24px] font-questrial font-normal uppercase mb-4 xl:mb-8">
            {t("common.social")}
          </p>
          <div className="flex flex-col gap-4 xl:gap-8 mt-3 xl:mt-0">
            <BlockSocial
              href={LINKEDIN}
              icon={<FaLinkedin className="w-6 h-6 text-white" />}
              label="/room-23"
            />

            <BlockSocial
              href={INSTAGRAM}
              icon={<FaInstagram className="w-6 h-6 text-white" />}
              label="@room23_agency"
            />
          </div>
        </div>

        {/* OFFICES */}
        <div className="flex flex-col mt-[43px] xl:mt-[63px]">
          <p className="text-[20px] leading-6 xl:text-xl xl:leading-[24px] font-questrial font-normal uppercase mb-4 xl:mb-8">
            {t("common.offices")}
          </p>

          <div className="flex flex-col gap-4 xl:gap-8">
            <BlockCountry
              country="Argentina"
              address={
                <>
                  Gallo 1483, <br />
                  Buenos Aires.
                </>
              }
            />
            <BlockCountry
              country={t("common.spain")}
              address={
                <>
                  Perill 19, <br /> Barcelona.
                </>
              }
            />
            <BlockCountry
              country="Uruguay"
              address={
                <>
                  18 de julio 1324, <br /> Montevideo.
                </>
              }
            />
            <BlockCountry
              country="Colombia"
              address={
                <>
                  Calle 145#17-54, <br /> Bogotá.
                </>
              }
            />
          </div>
        </div>

        {/* LINKS */}
        <div className="flex flex-col mt-[48px] xl:mt-0 gap-6 justify-center">
          {routes.map((route) => (
            <Link
              href={route.url}
              key={route.url}
              className="uppercase text-white opacity-50 text-[20px] font-questrial font"
            >
              {t(route.publicName)}
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <p className="text-[#545454] text-[20px] leading-6 mt-[57px] xl:hidden block font-light">
            {allRightsMessage}
          </p>
        </div>
      </Container>
    </div>
  );
}

