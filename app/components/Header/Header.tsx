
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="h-[54px] bg-[#F7F7F7] hidden lg:flex justify-between px-6 py-4 gap-8 lg:px-10">
      {/* Contact Information */}
      <div className="text-sm flex gap-8 flex-wrap w-full sm:w-auto text-center lg:text-left">
        <p>
          Phone Number: <span className="font-semibold">956 742 455 678</span>
        </p>
        <p>
          Email: <span className="font-semibold">info@ddsgnr.com</span>
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-6 lg:gap-8 items-center justify-center lg:justify-end">
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook size={20} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={20} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={20} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default Header;
