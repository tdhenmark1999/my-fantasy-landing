import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderContainerProps {
  buttonText: string;
  title: string;
  description?: string;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({
  buttonText,
  title,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        <div className="text-left max-w-[380px]">
          <button className="text-red-500 text-base font-bold">
            {buttonText}
          </button>
          <h1 className="text-2xl font-bold mt-2">{title}</h1>
          {description && (
            <p className="text-gray-350 mt-2 text-base">{description}</p>
          )}
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default HeaderContainer;
