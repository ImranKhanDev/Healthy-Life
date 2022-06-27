// import React from "react";

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Welcom to admin dashboard </h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
//         repellat.
//       </p>
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { useLocation } from "react-router-dom";

import { Routes } from "react-router-dom";
// import { Link } from "react-router-dom";
// import AddProduct from "./AddProduct/AddProduct";
// import Admin from "./Admin/Admin";
// import ManegeProducts from "./ManegeProducts/ManegeProducts";

// import GiveReview from "./GiveReview/GiveReview";
const Dashboard = () => {
  // let  {location,pathname}  = useLocation();

  return (
    <div className="mt-1  container-fluid">
      <h1>Welcome to Healthylife Dashboard</h1>
      <p> Dashboard feature is coming soon..</p>
      <Row className="row">
        {/* <Col className="mt-5 left-dash col-md-4">
          <ul>
            <li>
              <Link
                style={{ textDecoration: "none", fontSize: "22px" }}
                to={location.pathname}
              >
                Make Admin
              </Link>
            </li>
            <hr />
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "22px",
                }}
                to={`${location.pathname}/addProduct`}
              >
                Add product
              </Link>
              <hr />
            </li>
        
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "22px",
                }}
                to={`${location.pathname}/manegeProducts`}
              >
                Manege Products
              </Link>
        
            <hr />
           
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "22px",
                }}
                to={`${location.pathname}/addReview`}
              >
                Give Review
              </Link>
         
            <hr />
          </ul>
        </Col> */}
      </Row>
    </div>
  );
};

export default Dashboard;
