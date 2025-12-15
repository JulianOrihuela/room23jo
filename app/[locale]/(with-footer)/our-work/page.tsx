import { Container } from "@/src/components";
import { CategoriesSelector } from "@/src/components/client";
import { ProjectList } from "@/src/components/client/our-work/projects-list";
import { getTranslations } from "next-intl/server";

export default async function Work() {
  const t = await getTranslations();

  return (
    <>
      <Container className="text-dark">
        <div className="flex justify-center">
          <h1 className="mt-12 md:mt-32 text-[40px] leading-[44px] md:text-[64px] md:leading-16 max-w-[820px] text-center">
            {t.rich("sections.ourWork.title", { br: () => <br></br> })}
          </h1>
        </div>

        {/* CATEGORY LIST */}
        <div className="flex flex-row justify-between mt-10 md:mt-[117px]">
          <div className="text-[16px] w-1/5 md:w-auto leading-6 md:text-2xl md:leading-6 shrink-0">
            <p className="hidden md:block">{t("sections.ourWork.filter")}</p>
            <p className="md:hidden">{t("common.filters")}</p>
          </div>

          <div className="flex flex-row gap-4 md:gap-6 w-full md:w-auto overflow-x-auto no-scrollbar pt-[4px] pr-2">
            <CategoriesSelector />
          </div>
        </div>

        {/* PROJECT LIST */}
        <ProjectList />
      </Container>
    </>
  );
}
