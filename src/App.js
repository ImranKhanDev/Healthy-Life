import logo from "./logo.svg";
import "./App.css";
import "./Components/Assets/CSS/Style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import MakeAdmin from "./Components/Pages/Login/RequiredAuth/MakeAdmin/MakeAdmin";
import ManageProduct from "./Components/Pages/Login/RequiredAuth/ManageProduct/ManageProduct";
import AddReview from "./Components/Pages/Login/RequiredAuth/AddReview/AddReview";
import AddProduct from "./Components/Pages/Login/RequiredAuth/AddProduct/AddProduct";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Welcome />
          <Appbar />

          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/dashboard"
              element={
                <RequiredAuth>
                  <Dashboard />
                </RequiredAuth>
              }
            >
              <Route path="admin" element={<MakeAdmin/>} />
              <Route path="manageProduct" element={<ManageProduct/>} />
              <Route path="review" element={<AddReview/>} />
              <Route path="addproduct" element={<AddProduct/>} />
            </Route>

            <Route
              path="/services"
              element={
                <RequiredAuth>
                  <Services />
                </RequiredAuth>
              }
            ></Route>
            <Route
              path="/singleProductDetails/:id"
              element={
                <RequiredAuth>
                  <SingleProductDetails />
                </RequiredAuth>
              }
            ></Route>
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
