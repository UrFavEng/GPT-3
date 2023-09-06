import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [toggel, setToggel] = useState(true);
  return (
    <>
      <div className="flex  justify-between   py-8 items-center gap-1">
        <div className="flex gap-12 items-center	justify-center	">
          <div className="w-20 md:w-32">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <ul className="hidden  md:flex text-white gap-5 items-center">
            <li className="hover:text-sky-200 text-md lg:text-lg font-light	tracking-wider">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-sky-200 text-md lg:text-lg  font-light	tracking-wider">
              <a href="#gpt3">What is GPT?</a>
            </li>
            <li className="hover:text-sky-200 text-md lg:text-lg  font-light	tracking-wider">
              <a href="#openai">Open AI</a>
            </li>
            <li className="hover:text-sky-200 text-md lg:text-lg  font-light	tracking-wider">
              <a href="#casestudies">Case Studies</a>
            </li>
            <li className="hover:text-sky-200 text-md lg:text-lg  font-light	tracking-wider">
              <a href="#library">Library</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex ">
          <button className="text-white tracking-wider w-[80px] lg:w-[120px]  h-[48px] lg:h-[58px]  ">
            Sign in
          </button>
          <button className="text-white w-[80px] lg:w-[120px] h-[48px] lg:h-[58px] bg-[#FF4820] rounded-md	tracking-wider">
            Sign up
          </button>
        </div>{" "}
        <div className="relative md:hidden">
          <div
            className="md:hidden icns"
            onClick={() => {
              setToggel(!toggel);
            }}
          >
            {toggel ? (
              <HiOutlineBars3 className="text-white barss icns" />
            ) : (
              <AiOutlineClose className="text-white barss icns" />
            )}
            {/* <HiOutlineBars3 className="text-white barss " /> */}
          </div>
          <div
            className={`bg-[#031b34] absolute w-[200px] py-[10px] right-0 top-[40px] md:hidden nav z-10	${
              toggel ? "hidden" : ""
            }`}
          >
            <div>
              <ul className="flex flex-col	  md:hidden text-white gap-5 items-center">
                <li className="hover:text-sky-200 text-md lg:text-lg font-light	tracking-wider">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:text-sky-200 text-md lg:text-lg  font-light	tracking-wider">
                  <a href="#gpt3">What is GPT?</a>
                </li>
                <li className="hover:text-sky-200 text-md lg:text-lg  font-light	tracking-wider">
                  <a href="#openai">Open AI</a>
                </li>
                <li className="hover:text-sky-200 text-md lg:text-lg  font-light	tracking-wider">
                  <a href="#casestudies">Case Studies</a>
                </li>
                <li className="hover:text-sky-200 text-md lg:text-lg  font-light	tracking-wider">
                  <a href="#library">Library</a>
                </li>
              </ul>
              <div className="my-[15px] flex justify-center">
                <button className="text-white tracking-wider w-[40%]   h-[30px]  ">
                  Sign in
                </button>
                <button className="text-white  w-[40%]   h-[30px] bg-[#FF4820] rounded-md	tracking-wider">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
