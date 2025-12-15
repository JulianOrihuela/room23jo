"use client";
import { Link } from "@/src/i18n";
import { Badge } from "../../ui";
import Image from "next/image";
import { ReactNode } from "react";
import { VideoLazy } from "@/src/components/client/ui/video-lazy/video-lazy";

interface ProjectCardProps {
  href: string;
  video?: {
    url: string;
    mime: string;
  };
  image?: string;
  title: string;
  description: string | ReactNode;
  buttonLabel: string;
  badges: string[];
}

export function ProjectCard({
  href,
  video,
  image,
  title,
  description,
  badges,
  buttonLabel,
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <div className="relative rounded-lg h-[500px] [&:hover>.category-badge]:opacity-0 [&:hover>.see-project-badge]:opacity-100!">
        {image && (
          <Image
            src={image}
            fill
            alt="Background of project"
            objectFit="cover"
            className="rounded-lg"
          />
        )}
        {video && (
          <VideoLazy
            containerProps={{}}
            videoProps={{
              className:
                "absolute left-0 right-0 bottom-0 top-0 h-full object-cover w-full rounded-lg",
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              preload: "none",
              url: video.url,
              type: video.mime,
            }}
          />
        )}

        <div className="bg-black/30 flex flex-col justify-end absolute inset-0 rounded-lg p-8 w-auto ">
          <div className="flex flex-col gap-2 text-white">
            <p className="uppercase text-[32px] leading-[32px] font-semibold md:text-5xl md:leading-12 md:font-bold">
              {title}
            </p>
            <p className="text-[16px] leading-[20px] font-normal md:text-[20px] md:leading-[24px]">
              {description}
            </p>
          </div>
        </div>

        <Badge className="see-project-badge opacity-0 transition-all absolute left-1/2 top-1/2 -translate-1/2">
          {buttonLabel}
        </Badge>

        <div className="category-badge flex flex-row absolute right-[22px] top-[19px] md:right-[28px] transition-all gap-2">
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
