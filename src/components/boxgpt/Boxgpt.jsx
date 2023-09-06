const Boxgpt = ({ data, colOrow }) => {
  return (
    <div
      className={`mb-[20px] md:mb-[0px] flex ${
        colOrow
          ? "flex-col md:flex-row md:justify-between"
          : "flex-col  md:justify-start lg:justify-between flex-1"
      }  md:justify-start lg:justify-between`}
    >
      <h1 className="text-[24px] text-white leading-[75px]  hafter font-extrabold">
        {data.title}
      </h1>
      <h1
        className={`text-[#81afdd] ${
          colOrow ? "md:w-9/12 lg:w-2/3" : "w-[95%]"
        } font-medium leading-[30px]  `}
      >
        {data.para}
      </h1>
    </div>
  );
};

export default Boxgpt;
