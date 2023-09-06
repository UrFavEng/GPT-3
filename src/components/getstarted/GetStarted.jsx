import React from "react";

const GetStarted = () => {
  return (
    <div className="cta px-[15px] sm:px-[40px] py-[15px] sm:py-[30px] rounded-[18px] flex justify-between items-start sm:items-center mb-[30px] flex-col sm:flex-row">
      <div className="lg:w-[65%] text-black mb-[10px]">
        <p className="font-medium leading-[30px] text-[12px]">
          Request Early Access to Get Started
        </p>
        <h3 className="font-extrabold md:text-[20px] lg:text-[24px] lg:leading-[45px]">
          Register today & start exploring the endless possiblities.
        </h3>
      </div>
      <button className="w-[110px] h-[38px] sm:w-[120px] md:w-[130px] cursor-pointer lg:w-[150px] sm:h-[40px] md:h-[50px] lg:h-[60px] xl:w-[190px] rounded-[40px] bg-black text-white">
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
