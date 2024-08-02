import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-primaryColor pt-16 pb-4 px-6 mt-10 text-center">
      <div className="flex justify-center gap-9  text-secondaryColor">
        <a href="/" className="text-secondaryColor hover:underline">
          Get the App
        </a>
        <a href="/" className="text-secondaryColor hover:underline">
          Help
        </a>
        <a href="/" className="text-secondaryColor hover:underline">
          Site Index
        </a>
        <a href="/" className="text-secondaryColor hover:underline">
          Advertising
        </a>
      </div>
      <div className="flex justify-center gap-9 text-secondaryColor mt-2">
        <a href="/" className="text-secondaryColor hover:underline">
          Jobs
        </a>
        <a href="/" className="text-secondaryColor hover:underline">
          Privacy Policy
        </a>
      </div>
      <div className="text-secondaryColor mt-2">
        Copyright © 2024 Story Wise. All rights reserved.
      </div>
      <div className="flex justify-center gap-10 text-secondaryColor my-10">
        <a href="https://facebook.com" className="text-secondaryColor ">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com" className="text-secondaryColor ">
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </a>
        <a href="https://instagram.com" className="text-secondaryColor ">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://linkedin.com" className="text-secondaryColor ">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
