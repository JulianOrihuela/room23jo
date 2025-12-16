import type { Metadata } from "next";
import { Poppins, Questrial } from "next/font/google";
import { Header } from "@/src/components/server";
import "../globals.css";
import { CategoryProvider, HeaderProvider } from "@/src/components/client";
import { DEFAULT_LOCALE, routing } from "@/src/i18n";
import { redirect } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: ["400"],
});

/*export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}*/

export const metadata: Metadata = {
  title: "Room23 Agency",
  description:
    "Room23 was born from the dream of two young creatives who started their own bussiness paths in the Room 22 of a cheap hotel renting their spaces as offices. Their goal was expanding to Room 23, without knowing they would grow more than expected.",
};

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
  }>
) {

  const  locale  = "en";

  const { children } = props;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    return redirect(`/${DEFAULT_LOCALE}`);
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <HeaderProvider>
      <CategoryProvider>
        <html lang={locale}>
          <body
            className={`${poppins.className} ${questrial.variable} antialiased bg-white min-h-screen relative`}
          >
            <NextIntlClientProvider messages={messages}>
              <Header />
              {children}
            </NextIntlClientProvider>
          </body>
        </html>
      </CategoryProvider>
    </HeaderProvider>
  );
}
