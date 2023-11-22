import { Routes, Route, useLocation } from "react-router-dom";
import { Template } from "Components/Template";

import Home from "./Routes/Home";
import About from "./Routes/About";

import "./App.css";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Template location={location}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Template>
    </div>
  );
};

export default App;
