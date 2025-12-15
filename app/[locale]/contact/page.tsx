import { BlockCountry, BlockSocial, Container } from "@/src/components";
import { socials } from "@/src/config";
import { SocialTypes } from "@/src/modules/social";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const EMAIL = socials.find(
  (social) => social.type === SocialTypes.EMAIL
)?.value;

const INSTAGRAM = socials.find(
  (social) => social.type === SocialTypes.INSTAGRAM
)?.value;

const LINKEDIN = socials.find(
  (social) => social.type === SocialTypes.LINKEDIN
)?.value;

export default function Work() {
  const t = useTranslations();

  return (
    <div className="text-dark h-[80vh]">  
      <Container className="mx-auto md:mx-auto px-2 md:px-6 flex flex-col md:flex-row md:gap-[30px] xl:gap-[69px] h-full">
        <div className="flex flex-col md:mt-0 w-full md:w-1/3 xl:w-2/5 shrink-0 md:pb-6">
          <div className="relative w-full short:h-[50px] h-[167px] md:h-[729px]s md:h-full rounded-2xl ">
            <Image
              src="/room23/contact_banner.webp"
              alt="Banner"
              fill
              className="rounded-2xl object-cover contact-image"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-col w-full md:mt-[35px] md:pb-[00px]">
          <h1 className="mt-6 md:mt-0 text-[32px] leading-[34px] md:text-[45px] md:leading-[45px] xl:text-[55px] xl:leading-[60px] text-center md:text-start">
            {t.rich("sections.contact.title", {
              span: (children) => <span> {children}</span>,
              br: () => <br />,
            })}
          </h1>

          <div className="flex flex-col justify-center md:justify-start text-2xl leading-8 text-center md:text-start mt-4 md:mt-[31px]">
            <p className="font-questrial text-[13px] leading-[13px] md:text-[24px] md:leading-[24px]">
              {t("common.send-email-to")}:
            </p>{" "}
            <a
              className="md:font-medium md:text-4xl md:leading-12 text-purple underline flex flex-row justify-center items-center md:justify-start"
              href={`mailto:${EMAIL}`}
            >
              <span>{EMAIL}</span>
              <GoArrowUpRight />
            </a>
          </div>

          <div className="flex flex-row gap-8 md:gap-0 mt-[28px]">
            <div className="flex flex-col w-full">
              <p className="text-[16px] leading-6 md:text-xl md:leading-[24px] font-questrial font-normal uppercase text-black mb-4 md:mb-2">
                {t("common.social")}
              </p>
              <div className="flex flex-col gap-4 md:gap-4 mt-3 md:mt-0">
                <BlockSocial
                  href={LINKEDIN}
                  icon={<FaLinkedin className="w-5 h-5 md:w-7 md:h-7" />}
                  label="/room-23"
                />

                <BlockSocial
                  href={INSTAGRAM}
                  icon={<FaInstagram className="w-5 h-5 md:w-7 md:h-7" />}
                  label="@room23_agency"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <p className="text-[16px] leading-6 md:text-xl md:leading-[24px] font-questrial font-normal uppercase text-black mb-4 md:mb-2">
                {t("common.offices")}
              </p>

              <div className="flex flex-col gap-4 md:gap-4 pb-10 md:pb-0">
                <BlockCountry
                  country="Argentina"
                  address={<>Gallo 1483, Buenos Aires.</>}
                />
                <BlockCountry
                  country={t("common.spain")}
                  address={<>Perill 19, Barcelona.</>}
                />
                <BlockCountry
                  country="Uruguay"
                  address={<>18 de julio 1324, Montevideo.</>}
                />
                <BlockCountry
                  country="Colombia"
                  address={<>Calle 145#17-54, Bogotá.</>}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
