import { HomeContentWrapper } from "@/src/components/client/home";
import { Container, Hero } from "@/src/components/server";
import { socials } from "@/src/config";
import { SocialTypes } from "@/src/modules/social";
import { useTranslations } from "next-intl";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const INSTAGRAM = socials.find(
  (social) => social.type === SocialTypes.INSTAGRAM
)?.value;

const LINKEDIN = socials.find(
  (social) => social.type === SocialTypes.LINKEDIN
)?.value;

export default function Home() {
  const t = useTranslations();
  return (
    <Container>
      <HomeContentWrapper>
        <div className="w-full h-full flex flex-col">
          <div className="h-full">
            <Hero />
            <div className="flex flex-col gap-2 md:gap-8 text-dark mt-4 md:mt-8">
              <h1 className="text-[40px] leading-[44px] md:text-[64px] md:leading-[64px] font-normal">
                {t("sections.home.title")}
              </h1>
              <h2 className="text-sm md:text-2xl md:leading-6 font-normal [&>span]:font-light">
                {t.rich("sections.home.subtitle-2", {
                  span: (children) => <span>{children}</span>,
                })}
              </h2>
            </div>
          </div>

          <div className="h-full flex flex-col justify-end">
            <div className="pb-9 flex md:justify-between flex-col md:flex-row justify-end items-center gap-3.5 md:gap-0">
              <div className="flex flex-row gap-2">
                <a className="pointer" target="_blank" href={INSTAGRAM}>
                  <FaInstagram className="w-6 h-6" />
                </a>

                <a className="pointer" target="_blank" href={LINKEDIN}>
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>

              <div>
                <p className="text-dark text-[14px] md:text-2xl">
                  ©{new Date().getFullYear()} ROOM23 S.R.L.{" "}
                  {t("common.all-rights-reserved")}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </HomeContentWrapper>
    </Container>
  );
}
