import "./App.css";
import Blogs from "./components/blogs/Blogs";
import ComapniesLogo from "./components/comapniesLogo/ComapniesLogo";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import GetStarted from "./components/getstarted/GetStarted";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Possibilities from "./components/possibilities/Possibilities";
import Whatgpt from "./components/whatgpt/Whatgpt";

function App() {
  return (
    <>
      <div className="container">
        <div className="relative">
          <div className="blurrheader hidden lg:block"></div>
          <Navbar />
          <Header />
        </div>
        <ComapniesLogo />
        <Whatgpt />
        <Features />
        <Possibilities />
        <GetStarted />
        <Blogs />
      </div>
      <Footer />
    </>
  );
}

export default App;
