"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CharacterCard from "./CharacterCard";
import { charactersRolePlay, categories } from "./../data/data";

const AIRoleplay: React.FC = () => {
  const [visibleCharacters, setVisibleCharacters] = useState(4);
  const [isFullListShown, setIsFullListShown] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("");

  const handleCategoryClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory("");
    } else {
      setActiveCategory(category);
    }
    setVisibleCharacters(4); 
    setIsFullListShown(false); 
  };

  const toggleShowMore = () => {
    if (isFullListShown) {
      setVisibleCharacters(4);
      setIsFullListShown(false);
    } else {
      setVisibleCharacters(filteredCharacters.length);
      setIsFullListShown(true);
    }
  };

  const filteredCharacters = activeCategory
    ? charactersRolePlay.filter((character) => character.category === activeCategory)
    : charactersRolePlay; 

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence>
          <h2 className="text-red-500 text-sm md:text-base lg:text-lg font-bold">
            AI Roleplay
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mt-2">
            Recommended For You.
          </p>

          <div className="flex max-w-full overflow-auto flex-nowrap justify-start flex-wrap mt-6 space-x-2 pb-3 custom-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`flex items-center justify-center h-[32px] text-sm text-white whitespace-nowrap px-[12px] sm:px-[16px] md:px-[18px] py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category ? "bg-gray-550" : "bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatePresence>
      </motion.div>
      <motion.div
        initial={{ height: "auto" }}
        animate={{ height: "auto" }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-6">
          <AnimatePresence>
            {filteredCharacters.slice(0, visibleCharacters).map((character) => (
              <motion.div
                key={character.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CharacterCard key={character.name} character={character} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence>
          <div className="flex justify-center mt-8 space-x-4">
            <button className="bg-red-500 px-4 sm:px-6 py-3 text-white rounded-full text-sm sm:text-base">
              Create AI Boyfriend
            </button>
            <button
              className="bg-gray-500 px-4 sm:px-8 py-3 text-white rounded-full text-sm sm:text-base"
              onClick={toggleShowMore}
            >
              {isFullListShown ? "Show Less" : "Show More"}
            </button>
          </div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default AIRoleplay;
