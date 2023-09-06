import React from "react";
import Blog from "./Blog";
import img1 from "../../assets/blog01.png";
import img2 from "../../assets/blog02.png";
import img3 from "../../assets/blog03.png";
import img4 from "../../assets/blog04.png";
import img5 from "../../assets/blog05.png";
const Blogs = () => {
  return (
    <div id="library" className="pt-[80px] mb-8">
      <h1 className="text-[30px] tracking-[-1px] leading-[32px] sm:tracking-[0px]		 sm:text-[31px] sm:leading-[35px] mb-[30px] md:text-[35px] md:leading-[40px]  lg:text-[45px] lg:leading-[50px] font-semibold	 xl:text-[62px] xl:leading-[75px] xl:font-extrabold	 heading">
        A lot is happening, <br />
        We are blogging about it.
      </h1>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-10 box-blogs">
        <Blog imagURL={img1} />
        <div className="grid blogs gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-10">
          <Blog imagURL={img2} />
          <Blog imagURL={img3} />
          <Blog imagURL={img4} />
          <Blog imagURL={img5} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
