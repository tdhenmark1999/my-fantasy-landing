import React from 'react';
import { motion } from 'framer-motion';
import { SelectedFantasy } from './../model/Fantasy';

interface FantasyModalProps {
  selectedFantasy: SelectedFantasy;
  onClose: () => void;
}

const FantasyModal: React.FC<FantasyModalProps> = ({ selectedFantasy, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-950 rounded-lg overflow-hidden shadow-lg p-8 max-w-md"
      >
        <button className="absolute top-3 right-3 text-white" onClick={onClose}>
          ✖️
        </button>
        <img
          src={selectedFantasy.image}
          alt={selectedFantasy.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h3 className="mt-4 text-xl font-bold">{selectedFantasy.title}</h3>
        <p className="mt-2 text-gray-400">{selectedFantasy.description}</p>
        <a
          href={selectedFantasy.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-red-500 px-6 py-2 text-white rounded-full"
        >
          Chat Now
        </a>
      </motion.div>
    </div>
  );
};

export default FantasyModal;
