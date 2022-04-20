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
import RecentlyAdded from "./RecentAdded";
import Service from "./Service";
import Sponsor from "./Sponsor";

const Home = () => {
  return (
    <>
     

      <Banner />
      <Service />
      <BestSeller />
      <Categories />
      <MiddleCategory />
      <BannerBox />
      <FeaturedProducts />
      <Grocery />
      <RecentlyAdded />
      <Sponsor />
    </>
  );
};

export default Home;
