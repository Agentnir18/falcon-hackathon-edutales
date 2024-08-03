import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardData = [
    {
      image: "https://via.placeholder.com/200x200",
      title: "The Robot Kid",
    },
    {
      image: "https://via.placeholder.com/200x200",
      title: "How I meet my heart",
    },
    {
      image: "https://via.placeholder.com/200x200",
      title: "Super Soap",
    },
    {
      image: "https://via.placeholder.com/200x200",
      title: "A trip to the quantum world",
    },
    {
      image: "https://via.placeholder.com/200x200",
      title: "The beloved silent thief",
    },
    {
      image: "https://via.placeholder.com/200x200",
      title: "Another Story",
    },
    {
      image: "https://via.placeholder.com/200x200",
      title: "Yet Another Story",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  const visibleCards = 5;
  const translateXValue = (100 / visibleCards) * activeIndex;

  return (
    <div className="mx-10 mt-10 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-secondaryColor">New Stories</h2>
        <Link to={"/stories"}
          className="text-secondaryColor py-2 px-4 rounded-full"
        >
          See More &gt;
        </Link>
      </div>
      <div className="flex justify-between items-center relative">
        <button
          className="absolute left-0 bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor text-secondaryColor font-bold py-2 px-4 rounded-full z-10"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${translateXValue}%)`,
              gap: "16px",
            }}
          >
            {cardData.map((card, index) => (
              <div key={index} className="flex-shrink-0">
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute right-0 bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor text-secondaryColor font-bold py-2 px-4 rounded-full z-10"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
