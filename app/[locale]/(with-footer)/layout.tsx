import { Footer } from "@/src/components/server";

const DESKTOP_HEIGHT_FOOTER = 714;
const MOBILE_HEIGHT_FOOTER = 1400;

export default function Layout({ children }) {
  return (
    <>
      {children}

      <div
        className="hidden xl:block"
        style={{ height: DESKTOP_HEIGHT_FOOTER }}
      ></div>
      <div
        className="xl:hidden block"
        style={{ height: MOBILE_HEIGHT_FOOTER }}
      ></div>

      {/* <Footer className="h-full" /> */}
      <Footer className="absolute left-0 right-0 bottom-0" />
    </>
  );
}
