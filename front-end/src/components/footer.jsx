import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-300 py-10">
      <div className="container mx-auto text-center sm:text-left">
        {/* Logo Section */}
        <div className="flex justify-center sm:justify-start mb-6">
          <div className="flex items-center space-x-2">
            <div className="text-white">
           <img src="/asserts/img/logo-groupe-ss-fond.png" 
           className='w-40'
           alt="Logo" />
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center sm:justify-between items-center space-x-4 mb-4">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-700">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-700">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-700">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          {/* Navigation */}
          <div className="flex space-x-2 text-gray-700 text-center">
            <a href="#">à-propos</a>
            <a href="#">Evénement</a>
            <a href="#">Programme</a>
            <a href="#">Actus</a>
            <a href="#">Contact</a>
            <a href="#">Faq</a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          TrophenixAsso @ 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
