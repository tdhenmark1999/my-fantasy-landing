"use client";

import React, { useState } from "react";
import { generatedAiImage } from "./../data/data";
import HeaderContainer from "./HeaderContainer";
import { motion, AnimatePresence } from "framer-motion";

const GenerateImagePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    generatedAiImage[1].title
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="container mx-auto">
        <HeaderContainer
          buttonText="Generate AI Image"
          title="Beautiful erotic art in seconds."
          description="Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt."
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            <div className="flex flex-col lg:flex-row customer-bg-linear-1 p-6 rounded-2xl mt-6">
              <div className="w-full lg:w-1/2">
                {generatedAiImage.map((category) => (
                  <div
                    key={category.title}
                    className={`rounded-none p-4 text-white cursor-pointer ${
                      selectedCategory === category.title
                        ? "bg-gradient-to-r from-[#2C2C30] to-[#202024] border-l-2 border-[#F43F3F]"
                        : "border-l-2 border-[#2C2C30]"
                    }`}
                    onClick={() => setSelectedCategory(category.title)}
                  >
                    <h2 className="text-white lg:text-base text-xs">
                      {category.title}
                    </h2>
                    <p className="lg:text-xs text-gray-150 mt-1 text-[10px]">
                      {category.description}
                    </p>
                  </div>
                ))}

                <button className="justify-center w-full md:w-auto flex items-center gap-2.5 rounded-[31px] text-xs lg:text-sm font-medium bg-red-500 hover:bg-red-600 text-white font-bold py-2 lg:py-3 px-4 lg:px-6 rounded-lg mt-4 transition">
                  Generate Image{" "}
                  <img src="icons/ico-arrow-right.svg" alt="icon arrow right" />
                </button>
              </div>

              <div className="flex space-x-4 mt-8 lg:mt-0 lg:ml-8">
                {generatedAiImage
                  .find((category) => category.title === selectedCategory)
                  ?.images.map((image, index) => (
                    <div key={index} className="">
                      <img
                        src={image}
                        alt={`Generated ${selectedCategory} Image ${index + 1}`}
                        className="w-[186.76px] h-full object-cover rounded-[13.01px]"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default GenerateImagePage;