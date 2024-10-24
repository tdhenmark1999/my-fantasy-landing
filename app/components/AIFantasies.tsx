"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FantasyCard from "./FantasyCard";
import FantasyModal from "./FantasyModal";
import { fantasies } from "./../data/data";
import HeaderContainer from "./HeaderContainer";

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
      <HeaderContainer
        buttonText="AI Fantasies"
        title="Live your dream experience"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt."
      />
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
            <button className="w-full md:w-auto bg-red-500 px-8 py-3 text-white rounded-full text-sm">
              Create Fantasy
            </button>
            <button
              className="w-full md:w-auto bg-gray-500 px-8 py-3 text-white rounded-full text-sm"
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
