import React from 'react';
// import { InstagramOutlined, LinkedinOutlined, } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="bg-orange-300 py-8 px-14">
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
            {/* Icône Instagram */}
            <a
  href="https://www.instagram.com/trophenix_asso/profilecard"
  target="_blank"
  rel="noopener noreferrer"
>
  {/* <InstagramOutlined
    style={{ fontSize: '30px', margin: '0 10px', color: '#E4405F' }}
  /> */}
</a>

            {/* Icône LinkedIn */}
            {/* <a href="https://www.linkedin.com/company/trophenix-asso/" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined size={30} style={{ margin: '0 10px', color: '#0077B5' }} />
            </a> */}
          </div>

          {/* Navigation */}
          <div className="flex space-x-2 text-gray-700 text-center">
            <a href="#">À propos</a>
            <a href="#">Événements</a>
            <a href="#">Programmes</a>
            <a href="#">Actualités</a>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="text-center text-gray-700 mt-4">
  <a href="/informations-legales" className="hover:underline">Informations Légales et Politiques</a>
</div>


        {/* Copyright */}
        <p className="text-sm text-gray-600 mt-4">
          TrophenixAsso © 2024. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
