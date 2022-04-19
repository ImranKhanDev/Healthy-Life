import React from "react";
import Appbar from "../Shared/Appbar";
import Welcome from "../Shared/Welcome";
import Banner from "./Banner";
import BannerBox from "./BannerBox";
import BestSeller from "./BestSeller";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import Grocery from "./Grocery";
import MiddleCategory from "./MiddleCategory/MiddleCategory";
import Service from "./Service";

const Home = () => {
  return (
    <>
      <Welcome />
      <Appbar />
      <Banner />
      <Service />
      <BestSeller />
      <Categories />
      <MiddleCategory />
      <BannerBox />
      <FeaturedProducts />
      <Grocery/>
    </>
  );
};

export default Home;
