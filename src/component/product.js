import GreenContainer from "./greenContainer";
import SecondCardContainer from "./secondCardContainer";
import Navbar from "./navbar";

const Product = () => {
  return (
    <div className="productRoute">
      <Navbar />
      <div className="third-header">
        <h1>Tools to take your business to next level</h1>
      </div>
      <div className="container">
        <SecondCardContainer />
      </div>
      <div className="greenboxparentContainer">
        <GreenContainer />
      </div>
    </div>
  );
};

export default Product;
