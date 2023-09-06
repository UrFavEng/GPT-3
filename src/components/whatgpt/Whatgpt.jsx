import Boxgpt from "../boxgpt/Boxgpt";

const Whatgpt = () => {
  const data = [
    {
      title: "What is GPT-3",
      para: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
    },
    {
      title: "Chatbots",
      para: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
    },
    {
      title: "Knowledgebase",
      para: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
    {
      title: "Education",
      para: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
  ];
  return (
    <div
      id="gpt3"
      className="p-5 bg-[#031b34] md:py-10 md:px-7 lg:py-12  lg:px-10 xl:p-14 relative overflow-hidden"
    >
      <div className="absolute top-[-40%] left-[-40%] w-[581px] h-[410px] blur-gpt-top"></div>
      <div className="absolute bottom-[-40%] right-[-40%] w-[581px] h-[410px] blur-gpt-bottom"></div>
      <div></div>
      <Boxgpt data={data[0]} colOrow={true} className="flex" />
      <div className="flex-col py-[50px] flex md:flex-row md:py-[80px] justify-between xl:my-[40px]">
        <h1 className="text-[24px] leading-[30px] mb-[15px] md:mb-[0px]  font-extrabold md:leading-[38px] lg:leading-[45px] md:text-[29px] lg:text-[34px] heading">
          The possibilities are beyond
          <br /> your imagination
        </h1>
        <p className="text-[15px] font-normal text-[#ff8a71] md:font-medium md:text-[18px] leading-[30px]">
          Explore The Library
        </p>
      </div>
      <div className="flex-col lg:flex-row flex justify-start gap-5 flex-wrap ">
        <Boxgpt data={data[1]} colOrow={false} />
        <Boxgpt data={data[2]} colOrow={false} />
        <Boxgpt data={data[3]} colOrow={false} />
      </div>
    </div>
  );
};

export default Whatgpt;
