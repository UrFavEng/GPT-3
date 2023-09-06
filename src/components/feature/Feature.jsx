const Feature = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row mb-[20px] lg:mb-[20px] xl:mb-[30px] justify-between">
      <h1 className="hafter pt-[12px] text-[18px]  lg:text-[17px]   xl:text-[18px] font-extrabold lg:font-medium  leading-[24px] xl:font-extrabold w-[100%] lg:w-[29%] xl:w-[22%] text-white mb-[16px] lg:mb-[0px]">
        {data.title}
      </h1>
      <p className="text-[#81afdd] w-[100%] lg:w-[65%] font-medium text-[14px] lg:leading-[22px] xl:leading-[24px]">
        {data.para}
      </p>
    </div>
  );
};
export default Feature;
