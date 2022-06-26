import logo from "./logo.svg";
import "./App.css";
import "./Components/Assets/CSS/Style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePages/Home";
import Footer from "./Components/Shared/Footer";
import Appbar from "./Components/Shared/Appbar";
import Welcome from "./Components/Shared/Welcome";

import SingleProductDetails from "./Components/HomePages/SingleProductDetails/SingleProductDetails.js";
import NotFound from "./Components/HomePages/NotFound/NotFound";
import Login from "./Components/Pages/Login/Login";
import Services from "./Components/Pages/Services";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Dashboard from "./Components/Pages/Dashboard";
import Register from "./Components/Pages/Login/Register";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import RequiredAuth from "./Components/Pages/Login/RequiredAuth/RequiredAuth";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Welcome />
          <Appbar />
          <RequiredAuth path="/dashboard" element={<Dashboard />} />
          <RequiredAuth
            path="/singleProductDetails/:id"
            element={<SingleProductDetails />}
          />
          <RequiredAuth path="/services" element={<Services />} />
          <Routes>
            <Route path="*" element={<NotFound />} />

            <Route path="/home" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
