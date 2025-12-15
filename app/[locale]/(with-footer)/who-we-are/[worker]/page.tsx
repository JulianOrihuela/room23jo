import { workers } from "@/src/content/worker/workers";
import { Link, LOCALES_SUPPORTED } from "@/src/i18n";
import { getAllWorkerSlugs } from "@/src/utils/getAllWorkertSlugs";
import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

export async function generateStaticParams() {
  const staticParams: { locale: string; worker: string }[] = [];

  getAllWorkerSlugs().forEach((worker) => {
    LOCALES_SUPPORTED.forEach((locale) => {
      staticParams.push({ locale, worker });
    });
  });

  return staticParams;
}

function Container({ children, className = "", ...props }) {
	return (
		<div
			{...props}
			className={clsx("px-4 md:mx-auto md:max-w-[1250px] w-full", className)}
		>
			{children}
		</div>
	);
}

export default async function Page({ params }: { params: Promise<{ worker: string }> }) {
  const { worker: workerSlug } = await params;
  const worker = workers.find((worker) => worker.slug === workerSlug);
  const t = await getTranslations();

  const fullName = `${worker?.firstName} ${worker?.lastName}`;
  if (!worker) {
    return notFound();
  }

  return (
    <div className="flex flex-col mt-16 md:mt-[50px]">
      <Container className="flex flex-col items-center mb-4 md:mb-8">
        <div className="flex flex-col items-center">
          <Link href="/who-we-are">
            <div className="flex flex-row gap-2">
              <LiaLongArrowAltLeftSolid className="w-[29px] h-[29px]" />
              <p className="text-[18px] leading-[24px] md:text-[24px] md:leading-[32px]">
                {t("sections.workers.back-to-team-page")}
              </p>
            </div>
          </Link>
          <h1 className="questrial text-[42px] lading-[64px] md:text-[75px] md:lading-[98px] md:mt-6 font-normal">
            {fullName}
          </h1>
        </div>
      </Container>

      <div className="block md:hidden w-full border-b border-b-black"></div>
      <Container className="hidden md:flex">
        <div className="w-full border-b border-b-black"></div>
      </Container>

      <Container className="flex flex-col md:flex-row mt-8 md:mt-16 md:gap-14">
        <div className="w-full h-[380px] md:w-[450px] md:h-[500px] relative shrink-0">
          <Image
            alt={fullName}
            src={worker?.photo}
            layout="fill"
            className="rounded-[10px] grayscale object-top"
            objectFit="cover"
          />
        </div>
        <p className="text-[20px] leading-[20px] md:text-[24px] md:leading-[32px] text-dark mt-6 md:mt-0">
          {t.rich(`workers.${worker.slug}.description`, {
            br: () => <br></br>,
          })}
        </p>
      </Container>
    </div>
  );
}
