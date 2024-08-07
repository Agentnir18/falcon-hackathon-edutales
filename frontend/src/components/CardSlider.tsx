import React, { useRef, useState } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import cardData from "../assets/cardData.json";

// Define the type for the CardSlider props
interface CardSliderProps {
  title: string;
}

const CardSlider: React.FC<CardSliderProps> = ({ title }) => {
  const [isStories, setIsStories] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };


  const dataToDisplay = isStories ? cardData.stories : cardData.sitcoms;

  return (
    <div className="mx-10 mt-10 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-secondaryColor">{title}</h2>
        {/* Toggle Stories/Sitcoms button */}
        <div className="relative inline-block w-40 h-10">
          <div
            className={`absolute top-0 bottom-0 w-[50%] bg-secondaryColor transition-transform rounded-full duration-300 ${
              isStories ? "transform translate-x-0" : "transform translate-x-full"
            }`}
          />
          <div className="absolute inset-0 border-2 border-secondaryColor rounded-full flex items-center justify-between px-2">
            <button
              onClick={() => setIsStories(true)}
              className={`w-1/2 text-center py-2 pr-2 rounded-l-full ${
                isStories ? "text-primaryColor" : "text-secondaryColor"
              }`}
            >
              Stories
            </button>
            <button
              onClick={() => setIsStories(false)}
              className={`w-1/2 text-center py-2 pl-2 rounded-r-full ${
                isStories ? "text-secondaryColor" : "text-primaryColor"
              }`}
            >
              Sitcoms
            </button>
          </div>
        </div>
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
            {dataToDisplay.slice(0, 9).map((card) => (
              <div key={card.id} className="flex-shrink-0" style={{ minWidth: "calc(100% / 5)" }}>
                <Card key={card.id} id={card.id} image={card.image} title={card.title} type={isStories ? "story" : "sitcom"} />
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

