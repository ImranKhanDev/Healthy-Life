import logo from "./logo.svg";
import "./App.css";
import "./Components/Assets/CSS/Style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePages/Home";
import Footer from "./Components/Shared/Footer";
import Appbar from "./Components/Shared/Appbar";
import Welcome from "./Components/Shared/Welcome";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Welcome />
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
