import React from "react";

const Card = ({ image, title }) => {
  return (
    <div className="rounded-lg p-4">
      <img
        src={image}
        alt={title}
        className="rounded-lg shadow-outer-glow shadow-secondaryColor" // Adjust shadow-lg as needed for the glow effect
      />
      <h3 className="text-lg font-medium text-secondaryColor mt-5 text-center"> {/* Center align the label */}
        {title}
      </h3>
    </div>
  );
};

export default Card;