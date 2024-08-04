// src/components/CardDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import cardData from '../assets/cardData.json';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardDetail = () => {
  const { id } = useParams<{ id: string }>(); // Type the params object
  const cardId = parseInt(id || '', 10); // Convert id to a number, default to 0 if undefined
  const card = cardData.find(card => card.id === cardId);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row p-6">
      <div className="flex-1 md:w-1/2">
        <img
          src={card.image}
          alt={card.title}
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
      <div className="flex-1 md:w-1/2 md:pl-6 mt-6 md:mt-0">
        <h1 className="text-2xl font-bold text-secondaryColor">{card.title}</h1>
        <button
          className="flex items-center mt-4 bg-primaryColor text-secondaryColor border-2 border-secondaryColor rounded-full p-2 hover:bg-secondaryColor hover:text-primaryColor focus:outline-none"
        >
          Add to favourites
          <FontAwesomeIcon icon={faHeart} className="mr-2" />
        </button>
        <p className="mt-6 text-gray-700">
          {/* Lorem Ipsum Text */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default CardDetail;
