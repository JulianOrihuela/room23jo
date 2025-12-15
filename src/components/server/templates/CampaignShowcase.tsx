import Image from "next/image";
import clsx from "clsx";
import { ReactNode } from "react";
import { isImage, MultimediaMimeType } from "@/src/modules/file";

export interface CampaignShowcaseTemplateProps {
  title: string | ReactNode;
  subtitle: string;
  mainMedia: { url: string; type: MultimediaMimeType };
  sections: { title: string; content: string | ReactNode }[];
  category: string;
  media: { url: string; type: MultimediaMimeType }[][];
}

export function Container({ children, className = "", ...props }) {
  return (
    <div
      {...props}
      className={clsx("px-4 md:mx-auto md:max-w-[1400px] w-full", className)}
    >
      {children}
    </div>
  );
}

export function CampaignShowcaseTemplate({
  title,
  subtitle,
  mainMedia,
  sections,
  category,
  media: mediaMatrix,
}: CampaignShowcaseTemplateProps) {
  return (
    <div className="mt-[65px] md:mt-[125px]">
      <Container className="flex flex-col md:flex-row  md:justify-between text-dark mb-[39px] md:mb-[64px]">
        <h1 className="text-[20px] leading-[24px] font-medium md:text-[32px] md:leading-[32px] md:font-semibold">
          {title}
        </h1>
        <h2 className="text-[32px] leading-[32px] mt-4 md:mt-0 font-semibold md:text-[64px] md:leading-[64px] md:font-normal md:max-w-[1000px]">
          {subtitle}
        </h2>
      </Container>

      {/* Main Image */}
      <div className="flex justify-center py-8 relative h-[700px] w-full md:w-auto">
        {isImage(mainMedia.type) ? (
          <Image src={mainMedia.url} alt="Campaign Banner" fill className="object-cover" />
        ) : (
          <video
						controls
            className="absolute left-0 right-0 bottom-0 top-0 h-full object-cover w-full"
            autoPlay={false}
            loop
            muted
            playsInline
          >
            <source src={mainMedia.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Content Sections */}
      <Container className="flex flex-col text-dark md:mt-[96px]">
        <div className="flex flex-col md:flex-row">
          <div className="md:mr-[200px] uppercase text-[24px] leading-[24px] text-[#545454] font-normal mt-8 md:mt-0">
            {category}
          </div>
          <div className="md:max-w-[900px] mt-8 md:mt-0">
            {sections.map((section, index) => (
              <div key={index} className="mb-8 text-dark w-full">
                <h3 className="text-[32px] leading-[32px] font-semibold">
                  {section.title}
                </h3>
                <div className="text-[20px] leading-[24px] font-light mt-6 text-black">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:mt-[96px] flex flex-col gap-4 md:gap-6">
          {mediaMatrix.map((mediaRow, index) => (
            <div key={index} className="flex flex-col md:flex-row md:gap-6  gap-4">
              {mediaRow.map((media, index) => (
                <div className="w-full relative h-[500px] md:h-[700px] bg-black/30" key={index}>
                  {isImage(media.type) ? (
                    <Image
                      src={media.url}
                      alt="Image"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <video
                      className="absolute left-0 right-0 bottom-0 top-0 h-full object-cover w-full"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="none"
                    >
                      <source src={media.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
