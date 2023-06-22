import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Login from "./component/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route extact path="/" Component={Home} />
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
