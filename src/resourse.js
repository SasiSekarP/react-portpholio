import Navbar from "./component/navbar";
import GreenContainer from "./component/greenContainer";

const Resources = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="imageContainer">
        <img
          className="resourcesimg"
          alt="img"
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e5a3e4dd3aac1fd418842f_Mask%20Group%20189.webp"
        ></img>
        <img
          className="resourcesimg"
          alt="img"
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62e5a3a8ab61350b930e9916_Mask%20Group%20190.webp"
        ></img>
      </div>
      <GreenContainer />
    </div>
  );
};

export default Resources;
