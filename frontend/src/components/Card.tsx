import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  image: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ id, image, title }) => {
  return (
    <Link to={`/card/${id}`} className="block w-[200px] rounded-lg ">
      <img
        src={image}
        alt={title}
        className="rounded-lg w-[200px] h-[300px] object-cover shadow-outer-glow shadow-secondaryColor"
      />
      <h3 className="text-lg font-medium text-secondaryColor mt-5 text-center text-wrap">
        {title}
      </h3>
    </Link>
  );
};

export default Card;
