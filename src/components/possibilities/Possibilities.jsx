import image from "../../assets/possibility.png";
const Possibilities = () => {
  return (
    <div
      id="casestudies"
      className="flex flex-col sm:flex-row pb-[20px] sm:pb-[30px] md:pb-[40px] lg:pb-[60px] xl:pb-[80px] gap-8 sm:justify-between sm:items-end"
    >
      <div className="sm:w-5/12">
        <img src={image} alt="" className=" sm:w-[100%]" />
      </div>
      <div className="sm:h-[100%] sm:w-1/2 flex flex-col justify-end">
        <p
          className="font-medium mb-[5px] sm:mb-[0] text-[17px] sm:text-[12.5px] md:text-[14px] lg:text-[16px] md:leading-[10px] lg:leading-[30px] md:mb-[20px] lg:mb-[25px] text-[#71E5FF]
"
        >
          Request Early Access to Get Started
        </p>
        <h2 className="heading font-extrabold text-[26px] sm:text-[24px] md:text-[28px] sm:leading-[30px] lg:text-[34px] md:leading-[34px] lg:leading-[45px] mb-[5px] md:mb-[20px] lg:mb-[25px]">
          The possibilities are
          <br className="hidden sm:block" /> beyond your imagination
        </h2>
        <p className="font-normal text-[15px] sm:text-[12.5px]  md:text-[14px] lg:text-[16px] md:leading-[22px] lg:leading-[30px] mb-[5px] sm:mb-[10px]  sm:mt-[10px]  md:mt-[0px]  md:mb-[20px] lg:mb-[25px] text-[#81AFDD]">
          Yet bed any for travelling assistance indulgence unpleasing. Not{" "}
          <br className="hidden md:block" />
          thoughts all exercise blessing. Indulgence way everything joy
          <br className="hidden md:block" />
          alteration boisterous the attachment. Party we years to order
          <br /> allow asked of.
        </p>
        <p className="text-[15px] sm:text-[12.5px] font-medium md:text-[14px] lg:text-[16px] sm:leading-[10px]  md:leading-[20px] lg:leading-[30px] text-[#FF8A71]  md:mb-[20px] lg:mb-[25px]">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  );
};

export default Possibilities;
