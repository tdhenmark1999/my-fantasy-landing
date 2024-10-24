"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("Girls");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="px-4 sm:px-6 lg:px-8 py-4 flex justify-start space-x-8 text-white">
      <a
        href="#"
        className={`hover:text-red-500 text-base ${
          activeLink === "Girls" ? "text-red-500 font-semibold" : ""
        }`}
        onClick={() => handleLinkClick("Girls")}
      >
        Girls
      </a>
      <a
        href="#"
        className={`hover:text-red-500 text-base ${
          activeLink === "Anime" ? "text-red-500 font-semibold" : ""
        }`}
        onClick={() => handleLinkClick("Anime")}
      >
        Anime
      </a>
      <a
        href="#"
        className={`hover:text-red-500 text-base ${
          activeLink === "Guys" ? "text-red-500 font-semibold" : ""
        }`}
        onClick={() => handleLinkClick("Guys")}
      >
        Guys
      </a>
    </nav>
  );
};

export default Navbar;
