import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Login from "./component/login";
import Product from "./component/product";
import Solution from "./component/solution";
import Resources from "./resourse";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route extact path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/product" Component={Product} />
        <Route path="/solution" Component={Solution} />
        <Route path="/resources" Component={Resources} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
