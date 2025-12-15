export const BlockSocial = ({ icon, label, href }) => {
  return (
    <a target="_blank" href={href}>
      <div className="flex flex-row items-center cursor-pointer">
        {icon}
        <p className="text-[#545454] text-[16px] ml-1 leading-5 md:text-2xl md:leading-6">
          {label}
        </p>
      </div>
    </a>
  );
};