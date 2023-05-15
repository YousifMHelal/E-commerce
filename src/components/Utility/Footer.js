import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" border-t-2 mt-8">
      <div className="container mx-auto max-w-[1172px] px-4 py-8 flex justify-between items-center max-md:flex-col max-md:items-center">
        <div>
          <p className="text-xl font-bold tracking-wider">E-commerce</p>
        </div>
        <div>
          <div className="flex">
            <a href="#1">
              <FaFacebook
                className="text-2xl mx-4 mt-2 cursor-pointer 
                        transition-[1.5s] hover:scale-125"
              />
            </a>
            <a href="#2">
              <FaInstagram
                className="text-2xl mx-4 mt-2  cursor-pointer 
                        transition-[1.5s]  hover:scale-125"
              />
            </a>
            <a href="#3">
              <FaTwitter
                className="text-2xl mx-4 mt-2 cursor-pointer 
                        transition-[1.5s]  hover:scale-125"
              />
            </a>
            <a href="#4">
              <FaLinkedinIn
                className="text-2xl mx-4 mt-2  cursor-pointer 
                        transition-[1.5s]  hover:scale-125"
              />
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-center pb-4 capitalize">
        copyright &#169; 2022 all rights reserved{" "}
      </h1>
    </div>
  );
};

export default Footer;
