import { useTranslations } from "next-intl";
import Image from "next/image";

export function Hero() {
  const t = useTranslations();
  return (
    <div className="h-[300px] md:h-full md:max-h-[500px] w-full relative overflow-hidden">
      <video
        className="absolute left-0 right-0 bottom-0 top-0 h-full md:h-auto object-cover w-full hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/room23/home_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* MOBILE */}
      <Image
        className="absolute z-20 -right-[1px] -bottom-[1px] md:hidden block mi-clase"
        src="/vectors/1.svg"
        alt="Vector"
        width={133}
        height={24}
      />

      <Image
        className="absolute z-20 -left-[1px] -top-[1px] md:hidden block"
        src="/vectors/2.svg"
        alt="Vector"
        width={133}
        height={24}
      />

      {/* DESKTOP */}
      <Image
        className="absolute z-20 right-0 bottom-0 hidden md:block"
        src="/vectors/1.svg"
        alt="Vector"
        width={371}
        height={68}
      />

      <Image
        className="absolute z-20 left-0 top-0 hidden md:block"
        src="/vectors/2.svg"
        alt="Vector"
        width={371}
        height={68}
      />

      <div className="bg-black absolute inset-0 z-10 opacity-15"></div>

      <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center gap-2 md:gap-7 z-20">
        <Image
          className="block md:hidden"
          src="/room23/logo_animated_2.gif"
          width={193}
          height={48}
          alt="Room23 logo"
        />
        <Image
          className="hidden md:block"
          src="/room23/logo_animated_2.gif"
          width={426}
          height={106}
          alt="Room23 logo"
        />
        <div className="flex flex-col select-none items-center text-[11px] leading-[11px] md:text-[28px] md:leading-[28px] text-white font-light text-toggle">
          <div className="text first flex items-center justify-center">
            <p>
              {t.rich("sections.home.subtitle-first", { br: () => <br /> })}
            </p>
          </div>
          <div className="text second">
            <p>
              {t.rich("sections.home.subtitle-second", { br: () => <br /> })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
