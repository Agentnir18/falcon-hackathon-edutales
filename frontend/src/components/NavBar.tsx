// src/NavBar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between bg-primaryColor shadow-secondaryColor shadow-navbar py-4 px-10">
      <div className="flex space-x-4">
        <Link to="/" className="bg-primaryColor rounded-full text-xs border-2  border-secondaryColor px-10 py-1 text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor">
          Home
        </Link>
        <Link to="/stories" className="bg-primaryColor rounded-full text-xs border-2 px-10 py-1 text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor">
          Stories
        </Link>
        <Link to="/sitcoms" className="bg-primaryColor rounded-full text-xs border-2 px-10 py-1 text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor">
          Sitcoms
        </Link>
        <Link to="/generate" className="bg-primaryColor rounded-full text-xs border-2 px-10 py-1 text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor">
          Generate
        </Link>
        <Link to="/about" className="bg-primaryColor rounded-full text-xs border-2 px-10 py-1 text-secondaryColor hover:bg-secondaryColor hover:text-primaryColor">
          About
        </Link>
      </div>
      <div className="flex space-x-8 items-center">
        <FontAwesomeIcon icon={faSearch} className="text-secondaryColor" />
        <FontAwesomeIcon icon={faBell} className="text-secondaryColor" />
        <FontAwesomeIcon icon={faUser} className="text-secondaryColor" />
        <FontAwesomeIcon icon={faSun} className="text-secondaryColor" />
      </div>
    </div>
  );
};

export default NavBar;