import React, { useRef } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import cardData from "../assets/cardData.json";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Define the type for the CardSlider props
interface CardSliderProps {
  title: string;
}

const CardSlider: React.FC<CardSliderProps> = ({ title }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="mx-10 mt-10 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-secondaryColor">{title}</h2>
        <Link to={"/stories"} className="text-secondaryColor py-2 px-4 rounded-full">
          See More &gt;
        </Link>
      </div>
      <div className="flex justify-between items-center relative">
        <button
          className="absolute left-0 bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor border-2 border-secondaryColor text-secondaryColor font-bold py-2 px-4 rounded-full z-10"
          onClick={() => scroll("left")}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div ref={scrollRef} className="overflow-hidden w-full">
          <div className="flex whitespace-nowrap gap-4 no-scrollbar">
            {cardData.map((card) => (
              <div key={card.id} className="flex-shrink-0" style={{ minWidth: "calc(100% / 5)" }}>
                <Card id={card.id} image={card.image} title={card.title} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute right-0 bg-primaryColor hover:bg-secondaryColor hover:text-primaryColor border-2 border-secondaryColor text-secondaryColor font-bold py-2 px-4 rounded-full z-10"
          onClick={() => scroll("right")}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
