import "../App.css";

import { Link } from "react-router-dom";

import BrandLogo from "./brandlog";
import InputComponent from "./input";
import MemberCard from "./membercard";
import SecondCardContainer from "./secondCardContainer";
import ServiceCard from "./servicecard";
import SwitchContainer from "./switchContainer";
import ThirdCardData from "./thirdCardData";
import GreenContainer from "./greenContainer";
import Navbar from "./navbar";

function Home() {
  return (
    <div className="origin">
      <Navbar />
      <div className="top-header-container">
        <h1 className="first-heading">Best way to grow your local business</h1>
      </div>
      <div className="Artificial_Intelligence_text_container">
        <div className="Artificial_Intelligence_text">
          Artificial Intelligence powered easy-to-use tools to get more
          customers & give them a better experience
        </div>
      </div>
      <div className="container">
        <InputComponent />
      </div>
      <img
        alt="img"
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e6fa4473cb712ba3b454_home-hero-agnostic-l-2x-p-1600.webp"
      ></img>
      <div className="second-header-container">
        <h1 className="second-header">
          Trusted by 100,000+ local businesses globally
        </h1>
      </div>
      <div className="brand_row">
        <BrandLogo />
      </div>
      <div className="container">
        <MemberCard />
      </div>
      <div className="third-header">
        <h1>Tools to take your business to next level</h1>
      </div>
      <div className="container">
        <SecondCardContainer />
      </div>
      <div className="third-header">
        <h1>SalesCaptain is designed for your business</h1>
        <div className="Artificial_Intelligence_text_container">
          <div className="Artificial_Intelligence_text">
            Select your industry to see how it works
          </div>
        </div>
      </div>
      <div className="container">
        <ServiceCard />
      </div>
      <div className="third-header">
        <h1>Make your business stand out with us</h1>
      </div>
      <div className="container">
        <SwitchContainer />
      </div>
      <div className="third-header">
        <h1>Expert Insights and Resources</h1>
        <div className="Artificial_Intelligence_text_container">
          <div className="Artificial_Intelligence_text">
            Get the latest business intelligence relevant to your industry,
            designed to help you grow.
          </div>
        </div>
      </div>
      <div className="container">
        <ThirdCardData />
      </div>
      <div className="linkTxt">
        <Link to="/resources">View All Resources</Link>
      </div>
      <GreenContainer />
    </div>
  );
}

export default Home;
