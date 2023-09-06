import React from "react";

const Blog = ({ imagURL }) => {
  return (
    <div>
      <div>
        <img src={imagURL} alt="" />
      </div>
      <div className="bg-[#042C54] flex flex-col justify-between  md:gap-0 lg:gap-5 xl:gap-10 p-[7px] sm:p-[8px] md:p-[10px] lg:p-[20px]">
        <div>
          <p className="font-bold text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] leading-[20px] sm:leading-[26px] xl:leading-[34px] text-white">
            Sep 26, 2021
          </p>
          <p className="font-extrabold text-[12px] sm:text-[13px]  md:text-[15px] lg:text-[20px] xl:text-[25px] sm:leading-[18px] md:leading-[20px]  lg:leading-[27px] xl:leading-[30px] text-white">
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </p>
        </div>
        <p className="font-bold text-[7px] sm:text-[8px] md:text-[9px]  lg:text-[10px] xl:text-[11px] leading-[20px] sm:leading-[25px] xl:leading-[34px] text-white">
          Read Full Article
        </p>
      </div>
    </div>
  );
};

export default Blog;
