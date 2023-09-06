import React from "react";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="pt-[90px] pb-[20px] bg-[#031B34] ">
      <div className="container">
        <div className="flex flex-col text-center">
          <h1 className="text-[30px] tracking-[-1px] leading-[32px] sm:tracking-[0px]	text-center	 sm:text-[31px] sm:leading-[35px] mb-[30px] md:text-[35px] md:leading-[40px]  lg:text-[45px] lg:leading-[50px] font-semibold	 xl:text-[62px] xl:leading-[75px] xl:font-extrabold	 heading">
            Do you want to step in to the
            <br /> future before others
          </h1>
          <button className="w-[150px] h-[45px] sm:w-[180px] sm:h-[50px] md:w-[190px] md:h-[55px] lg:w-[200px] lg:h-[60px] xl:w-[218px] xl:h-[65px] border text-white sm:text-[17px] lg:text-[18px] block mx-auto">
            Request Early Access
          </button>
        </div>
        <div className="grid gap-12  justify-items-center grid-cols-2 lg:grid-cols-4 mt-[80px] sm:mt-[150px] text-white">
          <div>
            <a href="/">
              {" "}
              <img src={logo} alt="" className="w-[118px] h-[30px mb-[20px]" />
            </a>
            <p className="text-[12px] text-white leading-[14px]">
              Crechterwoord K12 182 DK
              <br /> Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div>
            <h3 className="mb-[12px] text-[14px] leading-[16px]">Links</h3>
            <ul className="flex flex-col gap-2 font-light">
              <li className="text-[12px] leading-[14px] cursor-pointer">
                Overons
              </li>
              <li className="text-[12px] leading-[14px] cursor-pointer">
                Social Media
              </li>
              <li className="text-[12px] leading-[14px] cursor-pointer">
                Counters
              </li>
              <li className="text-[12px] leading-[14px] cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-[12px] text-[14px] leading-[16px]">Company</h3>
            <ul className="flex flex-col gap-2 font-light">
              <li className="text-[12px] leading-[14px] cursor-pointer">
                Terms & Conditions
              </li>
              <li className="text-[12px] leading-[14px] cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-[12px] leading-[14px] cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-[12px] text-[14px] leading-[16px]">
              Get in touch
            </h3>
            <ul className="flex flex-col gap-2 font-light">
              <li className="text-[12px] leading-[14px]  cursor-pointer">
                Crechterwoord K12
                <br /> 182 DK Alknjkcb
              </li>
              <li className="text-[12px] leading-[14px]  cursor-pointer">
                085-132567
              </li>
              <li className="text-[12px] leading-[14px] cursor-pointer">
                info@payme.net
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-[50px] text-white text-[12px]">
          © 2021 GPT-3. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
