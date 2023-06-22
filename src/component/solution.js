import GreenContainer from "./greenContainer";
import ServiceCard from "./servicecard";
import Navbar from "./navbar";

const Solution = () => {
  return (
    <div className="productRoute">
      <Navbar />
      <div className="third-header">
        <h1>SalesCaptain is designed for your business</h1>
        <div className="Artificial_Intelligence_text_container">
          <div className="Artificial_Intelligence_text">
            Select your industry to see how it works
          </div>
        </div>
      </div>
      <div className="solutionroutecontainer">
        <ServiceCard />
      </div>
      <div className="greenboxparentContainer">
        <GreenContainer />
      </div>
    </div>
  );
};

export default Solution;
