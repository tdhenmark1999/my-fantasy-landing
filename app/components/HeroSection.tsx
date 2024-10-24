"use client";

import CharacterCard from "./CharacterCard";
import { motion, AnimatePresence } from "framer-motion";
import { characters } from "./../data/data";

const HeroSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
    <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[0px] items-center lg:items-start justify-between space-x-8 shadow-custom bg-custom-gradient rounded-[24px] p-12">
        <div className="flex-1">
            <p className="text-lg text-gray-300">Are you</p>
            <h1 className="text-[32px] font-bold">Into a bit danger?</h1>
            <p className="text-gray-300 mt-2 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>

            <div className="flex space-x-4 mt-6">
              <button className="bg-gray-550 h-[56px] w-[56px] p-3 rounded-full text-xl hover:bg-gray-600 transition ease-in-out duration-200 flex items-center justify-center">
                😈
              </button>
              <button className="bg-gray-500 h-[56px] w-[56px] p-3 rounded-full text-xl hover:bg-gray-600 transition ease-in-out duration-200 flex items-center justify-center">
                🔥
              </button>
              <button className="bg-gray-500 h-[56px] w-[56px] p-3 rounded-full text-xl hover:bg-gray-600 transition ease-in-out duration-200 flex items-center justify-center">
                😎
              </button>
              <button className="bg-gray-500 h-[56px] w-[56px] p-3 rounded-full text-xl hover:bg-gray-600 transition ease-in-out duration-200 flex items-center justify-center">
                🕶️
              </button>
            </div>
          </div>

          <div className="flex space-x-4 flex-1 overflow-x-auto max-w-full lg:overflow-visible">
          <AnimatePresence>
              {characters.map((character) => (
                <motion.div
                  key={character.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <CharacterCard character={character} width="199px"/>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
