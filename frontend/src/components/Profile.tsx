import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

interface ProfileProps {
  name: string;
  image: string;
  role: string;
  linkedin?: string;
  github?: string;
}

const Profile: React.FC<ProfileProps> = ({ name, image, role, linkedin, github }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-40 h-40 mb-4">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="rounded-full w-full h-full object-cover grayscale shadow-outer-glow shadow-secondaryColor hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <h2 className="text-xl font-semibold text-secondaryColor">{name}</h2>
      <span className="text-md text-secondaryColor">{role}</span>
      <div className="flex space-x-4 mt-2">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-secondaryColor">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-secondaryColor">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Profile;
