"use client";

import React, { useState } from "react";
import HeaderContainer from "./HeaderContainer";
import { motion, AnimatePresence } from "framer-motion";

interface AIVoiceProps {
data: any[]; 
}

const AIVoice: React.FC<AIVoiceProps> = ({ data }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(2);

  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-8 py-8">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-[5px]" />
      <div className="container mx-auto text-center text-white relative z-10">
        <div className="flex items-end justify-between">
          <HeaderContainer
            buttonText="AI Voice - Coming Soon"
            title="Hear your Companions!"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt."
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence>
              <div>
                <img src="icons/ico-sound.svg" />
              </div>
            </AnimatePresence>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            <div className="p-[50px] bg-gradient-to-t from-[#202024] to-transparent mt-5 relative overflow-hidden rounded-2xl">
              <img
                src="background/layer-bg-voice.png"
                className="pointer-events-none absolute top-0 left-1/2 transform -translate-x-1/2"
              />
              <div className="flex justify-center space-x-8 mt-10">
                {data.map((avatar, index) => (
                  <div
                    key={avatar.id}
                    className={`relative rounded-full overflow-hidden cursor-pointer transition-transform duration-300 ${
                      selectedAvatar === index
                        ? "transform scale-125"
                        : "transform scale-100"
                    }`}
                    onClick={() => setSelectedAvatar(index)}
                  >
                    <img
                      src={avatar.image}
                      alt={avatar.name}
                      className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover sm:w-16 sm:h-16 "
                    />
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center space-x-2 gap-[25px]">
                  <div className="text-white flex">
                    <img src="icons/ico-music.svg" />
                  </div>
                  <div className="flex max-w-[355px] items-start gap-[10px]">
                    <img src="icons/ico-dialog-right.svg" />
                    <p className="text-white text-base">
                      {data[selectedAvatar].description}
                    </p>
                    <img src="icons/ico-dialog-left.svg" />
                  </div>
                  <div className="text-white flex">
                    <img src="icons/ico-music.svg" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default AIVoice;
