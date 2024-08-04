// src/pages/Results.tsx
import { useState } from 'react';
import Card from '../components/Card';
import cardData from '../assets/cardData.json';

const Results = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 20;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cardData.slice(startIndex, endIndex);

  return (
    <div className='flex justify-center items-center flex-col py-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {currentCards.map((card) => (
          <Card {...card} />
        ))}
      </div>
      <div className='flex justify-center items-center mt-8'>
        <button
          onClick={handlePrevPage}
          className='bg-primaryColor text-secondaryColor border-2 border-secondaryColor rounded-full p-2 mx-1 hover:bg-secondaryColor hover:text-primaryColor focus:outline-none'
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`bg-primaryColor text-secondaryColor border-2 border-secondaryColor rounded-full p-2 mx-1 hover:bg-secondaryColor hover:text-primaryColor focus:outline-none ${currentPage === index + 1 ? 'bg-secondaryColor text-primaryColor' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className='bg-primaryColor text-secondaryColor border-2 border-secondaryColor rounded-full p-2 mx-1 hover:bg-secondaryColor hover:text-primaryColor focus:outline-none'
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Results;
