export const BlockCountry = ({ country, address }) => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 w-full">
      <h2 className="font-normal text-[16px] leading-4 md:font-medium md:text-[20px] md:leading-[22px]">
        {country}
      </h2>
      <p className="text-[16px] leading-4 text-[#545454] md:font-light md:text-[20px] md:leading-[22px]">
        {address}
      </p>
    </div>
  );
};