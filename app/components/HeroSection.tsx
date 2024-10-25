"use client";

import CharacterCard from "./CharacterCard";
import { motion, AnimatePresence } from "framer-motion";
import { CharacterSingle } from '../model/Character';
import { useState } from "react";

interface HeroSectionProps {
  data: Record<string, CharacterSingle[]>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const [selectedEmoji, setSelectedEmoji] = useState<string>("😈");

  const filteredData = data[selectedEmoji] || [];

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
              {["😈", "🔥", "😎", "🕶️"].map((emoji) => (
                <button
                  key={emoji}
                  className={`bg-gray-500 h-[56px] w-[56px] p-3 rounded-full text-xl hover:bg-gray-600 transition ease-in-out duration-200 flex items-center justify-center ${selectedEmoji === emoji ? "bg-gray-550" : ""}`}
                  onClick={() => setSelectedEmoji(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ height: "auto" }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.4 }}
            className="h-auto overflow-auto max-w-full lg:overflow-hidden"
          >
            <div className="flex space-x-4 flex-1 overflow-x-auto max-w-full lg:overflow-visible">
              <AnimatePresence>
                {filteredData.map((character, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CharacterCard character={character} width="199px" height="300px" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
