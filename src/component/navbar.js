import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <img
          alt="logImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxTZmj0VxIFQAEnoB1Jyd4I9kNrSvaSV5Qg&usqp=CAU"
        ></img>
      </div>
      <NavLink className="navlinktag" to="/">
        Home
      </NavLink>
      <NavLink className="navlinktag" to="/product">
        Product
      </NavLink>
      <NavLink className="navlinktag" to="/solution">
        Solution
      </NavLink>
      <NavLink className="navlinktag" to="/resources">
        Resources
      </NavLink>
    </div>
  );
};

export default Navbar;
