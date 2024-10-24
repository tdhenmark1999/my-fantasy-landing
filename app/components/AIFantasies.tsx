"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FantasyCard from "./FantasyCard";
import FantasyModal from "./FantasyModal";
import { fantasies } from './../data/data';

const AIFantasies: React.FC = () => {
  const [selectedFantasy, setSelectedFantasy] = useState<any>(null);
  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});
  const [visibleFantasies, setVisibleFantasies] = useState(3); 
  const [isFullListShown, setIsFullListShown] = useState(false); 
  const [isAnimating, setIsAnimating] = useState(false); 


  const openModal = (fantasy: any) => {
    setSelectedFantasy(fantasy);
  };

  const closeModal = () => {
    setSelectedFantasy(null);
  };

  const toggleLike = (
    fantasy: any,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setLiked((prevLiked) => {
      const newLiked = !prevLiked[fantasy.id];
      return {
        ...prevLiked,
        [fantasy.id]: newLiked,
      };
    });
  };

  const toggleShowMore = () => {
    if (isFullListShown) {
      setIsAnimating(true);
        setVisibleFantasies(3);
        setIsFullListShown(false);
        setIsAnimating(false);
    } else {
      setVisibleFantasies(fantasies.length);
      setIsFullListShown(true);
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence>
          <div className="max-w-[380px]">
            <h2 className="text-red-500 text-base font-bold">AI Fantasies</h2>
            <h1 className="text-2xl font-bold mt-2">
              Live your dream experience.
            </h1>
            <p className="text-gray-350 mt-2 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </AnimatePresence>
      </motion.div>
      <motion.div
        initial={{ height: "auto" }}
        animate={{ height: "auto" }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <AnimatePresence>
            {fantasies.slice(0, visibleFantasies).map((fantasy) => (
              <motion.div
                key={fantasy.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FantasyCard
                  key={fantasy.id}
                  fantasy={fantasy}
                  liked={!!liked[fantasy.id]}
                  onOpenModal={openModal}
                  onToggleLike={toggleLike}
                />
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
          <div className="mt-5 flex space-x-4 justify-center">
            <button className="bg-red-500 px-8 py-3 text-white rounded-full text-sm">
              Create Fantasy
            </button>
            <button
              className="bg-gray-500 px-8 py-3 text-white rounded-full text-sm"
              onClick={toggleShowMore}
              disabled={isAnimating}
            >
              {isFullListShown ? "Show Less" : "Show More"}{" "}
            </button>
          </div>
        </AnimatePresence>
      </motion.div>

      {selectedFantasy && (
        <FantasyModal selectedFantasy={selectedFantasy} onClose={closeModal} />
      )}
    </section>
  );
};

export default AIFantasies;
