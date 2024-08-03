import React from "react";
import CardSlider from "../components/CardSlider";

const Home = () => {
  return (
    <div>
      <div className="pt-10 pb-20 pl-10">
        <h1 className="text-5xl font-bold text-secondaryColor ">Story Wise</h1>
        <h2 className="text-xl text-secondaryColor ">Learn and Enjoy</h2>
      </div>
      <CardSlider />
      <CardSlider />
      <CardSlider />
    </div>
  );
};

export default Home;
