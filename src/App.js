
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Services from "./pages/service/Service";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Pagenotfound from "./pages/Pagenotfound";
import GoToTop from "./components/GoToTop/GoToTop";
import './App.scss';
import InFor from "./pages/InFor";



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/service" element = {<Services />}/>
          <Route path="/experience" element = {<Experience />}/>
          <Route path="/infor" element = {<InFor/>}/>
          <Route path="*" element = {<Pagenotfound />}/>
        </Routes>
      </BrowserRouter>
      <GoToTop />
    </div>
  );
}

export default App;
