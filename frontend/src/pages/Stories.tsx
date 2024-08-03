import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HorizontalSlider from '../components/HorizontalSlider';
import Results from '../components/Results';


const Stories = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center pt-20 pb-10'>
        <h1 className="text-5xl font-bold text-secondaryColor">Stories</h1>
      </div>
      <div className='flex justify-center'>
        <div className='relative'>
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-primaryColor text-secondaryColor border-2 border-secondaryColor rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondaryColor"
          />
          <FontAwesomeIcon 
            icon={faSearch} 
            className="absolute right-3 top-3 text-secondaryColor"
          />
        </div>
      </div>
      <HorizontalSlider />
      <Results/>
    </div>
  );
}

export default Stories;
