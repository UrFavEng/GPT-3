import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div id="home" className="flex	flex-col sm:flex-row	items-center">
      <div className="flex-1">
        <h1 className="text-[30px] tracking-[-1px] leading-[32px] sm:tracking-[0px]		 sm:text-[31px] sm:leading-[35px] mb-[15px] md:text-[35px] md:leading-[40px]  lg:text-[45px] lg:leading-[50px] font-semibold	 xl:text-[62px] xl:leading-[75px] xl:font-extrabold	 heading">
          Let’s Build Something amazing with GPT-3
          <br /> OpenAI
        </h1>
        <p className="text-[13.5px]  leading-[17.5px] sm:text-[14px] sm:leading-[18px] md:text-[16px] md:leading-[22px] md:pr-[16px] lg:leading-[24px]  lg:text-[18px] lg:pr-[20px] xl:text-[20px] xl:pr-[25px] sm:font-normal	xl:leading-[28px]  para">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <form className="rounded-[5px] overflow-hidden my-5 flex justify-start items-center ">
          <input
            className="w-[50%] h-[28px] text-[9px] sm:w-[68%] sm:h-[30px] sm:text-[13px] md:w-[60%] md:h-[36px] md:text-[14px] lg:w-[55%] lg:h-[40px] xl:w-1/2 xl:h-[45px] pl-[15px]"
            type="text"
            placeholder="Your Email Address"
          />
          <input
            className="w-[20%] h-[28px] text-[9px] sm:w-[25%] sm:h-[30px] text-sm md:w-[25%] md:h-[36px] text-md  lg:w-[20%]  lg:h-[40px] xl:w-[15%] xl:text-md text-white xl:h-[45px] bg-[#FF4820] "
            type="button"
            value={"Get Started"}
          />
        </form>
        <div className="gap-2 flex justify-start items-center md:gap-3">
          <img src={people} alt="" className="w-3/12 sm:w-3/12	 md:w-1/4" />
          <p className="text-[10px] sm:text-[10.5px]  md:text-[12px] lg:text-[16px] xl:text-[18px] text-sm text-white xl:text-md">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="flex-1 w-10/12 text-center	mx-auto relative">
        <div className="facegpt"></div>
        <img src={ai} alt="" />
      </div>
    </div>
  );
};

export default Header;
