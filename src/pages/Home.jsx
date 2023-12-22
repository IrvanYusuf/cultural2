import React from "react";
import CarouselHome from "../components/CarouselHome";
import CategoryHome from "../components/CategoryHome";
import SectionInfo2 from "../components/SectionInfo2";
import ExploreWisata from "../components/ExploreWisata";
import MelestarikanBudaya from "../components/MelestarikanBudaya";

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <SectionInfo2 />
      <CategoryHome />
      <ExploreWisata />
      {/* <MelestarikanBudaya /> */}
    </div>
  );
};

export default Home;
