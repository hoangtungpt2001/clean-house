
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Pagenotfound from "./pages/Pagenotfound";
import Menu from "./pages/Menu";
import Register from "./pages/Register";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/contact" element = {<Contact />}/>
          <Route path="/menu" element = {<Menu />}/>
          <Route path="/register" element = {<Register />}/>
          <Route path="*" element = {<Pagenotfound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
