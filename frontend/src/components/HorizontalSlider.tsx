import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const categories = ['Drama', 'Tech', 'Health', 'Mystery', 'Comedy','Drama', 'Tech', 'Health', 'Mystery', 'Comedy','Drama', 'Tech', 'Health', 'Mystery', 'Comedy',];

const HorizontalSlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className='relative flex items-center justify-center py-10'>
      <button 
        onClick={() => scroll('left')} 
        className='left-0 z-10 bg-primaryColor text-secondaryColor border-2 border-secondaryColor rounded-full p-2 hover:bg-secondaryColor hover:text-primaryColor focus:outline-none'
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div 
        ref={scrollRef} 
        className='flex overflow-x-auto whitespace-nowrap no-scrollbar px-4'
      >
        {categories.map((category, index) => (
          <button 
            key={index} 
            className='bg-primaryColor text-secondaryColor border-2 border-secondaryColor rounded-full px-4 py-2 mx-2 hover:bg-secondaryColor hover:text-primaryColor'
          >
            {category}
          </button>
        ))}
      </div>
      <button 
        onClick={() => scroll('right')} 
        className='right-0 z-10 bg-primaryColor text-secondaryColor border-2 border-secondaryColor rounded-full p-2 hover:bg-secondaryColor hover:text-primaryColor focus:outline-none'
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default HorizontalSlider;
