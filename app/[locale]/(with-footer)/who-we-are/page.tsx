import DragScrollHorizontal from "@/src/components/client/ui/drag-scroll-horizontal/drag-scroll-horizontal";
import { workers } from "@/src/content/worker/workers";
import { Link } from "@/src/i18n";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Worker = ({ fullName, position, image, slug }) => {
  return (
    <Link href={`/who-we-are/${slug}`} draggable={false}>
      <div className="w-[298.8px] h-[332px] md:w-[528px] md:h-[587px] rounded-[10px] relative shrink-0">
        <Image
          src={image}
          alt={fullName}
          layout="fill"
          draggable={false}
          objectFit="cover"
          className="rounded-[10px] object-top grayscale"
        />
        <div
          className="absolute inset-0 rounded-[10px] flex flex-col justify-end p-5"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 47.7%, #000000 93.02%)",
          }}
        >
          <div className="text-white z-10 overflow-hidden">
            <p
              className="text-[21px] leading-[21px] md:text-[37px] md:leading-[37px]"
              dangerouslySetInnerHTML={{ __html: fullName }}
            />
            <p className="text-[13px] leading-[15px] md:text-[23px] md:leading-[28px] font-light mt-2">
              {position}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

function Container({ children, className = "", ...props }) {
  return (
    <div
      {...props}
      className={clsx("px-4 md:mx-auto md:max-w-[1300px] w-full", className)}
    >
      {children}
    </div>
  );
}

export default function Work() {
  const t = useTranslations();
  return (
    <div className="">
      <Container className="flex flex-col justify-center md:items-center">
        <h1 className="text-dark font-medium md:font-normal text-[40px] leading-[40px] text-center max-w-[1000px] [&>span]:italic [&>span]:font-light md:text-[64px] md:leading-[64px] mt-[52px] md:mt-[125px]">
          {t.rich("sections.workers.title", {
            span: (chunk) => <span>{chunk}</span>,
          })}
        </h1>

        <div className="flex flex-col mt-[40px] md:mt-[86px] w-full">
          <div className="flex flex-row justify-end items-end md:items-center">
            <p className="text-[20px] md:text-[32px] font-medium md:font-normal">
              {t("sections.workers.meet-our-team")}
            </p>
            <LiaLongArrowAltRightSolid className="w-[29px] h-[29px]" />
          </div>
        </div>
      </Container>

      <div className="flex justify-end">
        {/* <div className="w-[80%]"> */}
        <div className="pl-8 w-full">
          <DragScrollHorizontal className="w-full flex gap-4 mt-[25px]  no-scrollbar">
            {workers.map((worker) => (
              <Worker
                key={worker.id}
                fullName={worker?.fullNameRichText || `${worker.firstName} ${worker.lastName}`}
                image={worker.photo}
                position={worker.position}
                slug={worker.slug}
              />
            ))}
          </DragScrollHorizontal>
        </div>
      </div>

      <Container className="flex flex-col justify-center md:items-center">
        <div className="flex flex-col md:flex-row mt-[88px] md:mt-[162px] md:gap-[160px]">
          <h2 className="text-2xl leading-[32px] font-bold shrink-0 max-w-[165px]">
            {t("sections.workers.subtitle")}
          </h2>
          <p className="font-questrial text-[32px] leading-[32px] md:text-[48px] md:leading-[48px] mt-[57px] md:mt-0">
            {t("sections.workers.description")}
          </p>
        </div>
      </Container>

      <Container className="flex flex-col mt-[113px] md:mt-[165px] pb-6 gap-[67px] md:gap-[96px]">
        {["+40", "+4", "+20"].map((value, index) => (
          <div
            key={index}
            className="flex flex-row gap-2 md:gap-5 border-b border-b-[#C1C1C1] pb-4 px-4 md:items-baseline"
          >
            <div className="text-purple text-[56px] leading-[45px] md:text-[64px] md:leading-[64px] w-[110px] md:w-[125px] text-end">
              {value}
            </div>
            <p className="text-[20px] leading-[24px] md:text-[48px] md:leading-[48px] text-dark font-medium">
              {t.rich(`sections.workers.features.${index}`, {
                span: (chunk) => (
                  <span className="text-[12px] leading-[16px] md:text-[20px] md:leading-[24px] block md:inline font-light ml-0 md:ml-[47px]">
                    {chunk}
                  </span>
                ),
              })}
            </p>
          </div>
        ))}
      </Container>
    </div>
  );
}
