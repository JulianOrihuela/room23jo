import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {

  console.log(requestLocale)

  const finalLocale = "en"
  
  

  return {
    locale: finalLocale,
    messages: (await import(`../messages/${finalLocale}.json`)).default
  };
});