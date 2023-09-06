import slack from "../../assets/slack.png";
import shopify from "../../assets/shopify.png";
import google from "../../assets/google.png";
import dropbox from "../../assets/dropbox.png";
import altassian from "../../assets/atlassian.png";
const ComapniesLogo = () => {
  return (
    <div className="flex justify-center gap-[46.48px] flex-wrap		items-center py-12">
      <img src={google} alt="" />
      <img src={slack} alt="" />
      <img src={altassian} alt="" />
      <img src={dropbox} alt="" />
      <img src={shopify} alt="" />
    </div>
  );
};

export default ComapniesLogo;
