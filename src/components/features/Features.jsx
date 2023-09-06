import React from "react";
import Feature from "../feature/Feature";

const Features = () => {
  const data = [
    {
      title: "Improving end distrusts instantly ",
      para: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      title: "Become the tended active",
      para: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      title: "Message or am nothing",
      para: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      title: "Really boy law county",
      para: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];
  return (
    <div
      id="openai"
      className="px-[10px] sm:px-[0px] flex-col lg:flex-row py-[80px] lg:py-[160px] lg:pb-[70px] flex justify-between relative"
    >
      <div className="absolute w-[777px] h-[777px] blurfeaturess"></div>
      <div className="lg:w-[48%] xl:w-4/12 mb-[50px] lg:mb-[0px]">
        <h1 className="font-extrabold  text-[29px] lg:text-[34px] leading-[38px] lg:leading-[45px] heading mb-[10px] lg:mb-[30px]">
          The Future is Now and <br className="hidden xl:block" />
          You Just Need To Realize <br className="hidden lg:block" /> It. Step
          into Future Today <br className="hidden lg:block" />& Make it Happen.
        </h1>
        <p className="text-[#ff8a71] font-medium leading-[20px] lg:leading-[30px] text-[14px] lg:text-[16px]">
          Request Early Access to Get Started
        </p>
      </div>
      <div className="w-[100%] lg:w-1/2">
        <Feature data={data[0]} />
        <Feature data={data[1]} />
        <Feature data={data[2]} />
        <Feature data={data[3]} />
      </div>
    </div>
  );
};

export default Features;
