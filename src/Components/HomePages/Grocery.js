import React from "react";
import grocery from "../Assets/images/banner-container.jpg";
const Grocery = () => {
  return (
    <div className="my-5 hidden">
      <img src={grocery} className="grocery__img featured__img" alt="" />
    </div>
  );
};

export default Grocery;
