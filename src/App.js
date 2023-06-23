import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Notfound from "./component/notfound";
import Product from "./component/product";
import Solution from "./component/solution";
import Resources from "./component/resourse";

import "./style/resourse.css";
import "./style/greencontainer.css";
import "./style/inputrow.css";
import "./style/brand.css";
import "./style/membercard.css";
import "./style/secondContainer.css";
import "./style/service.css";
import "./style/switch.css";
import "./style/thirdcontainer.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route extact path="/" Component={Home} />
        <Route path="/product" Component={Product} />
        <Route path="/solution" Component={Solution} />
        <Route path="/resources" Component={Resources} />
        <Route path="*" Component={Notfound} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
