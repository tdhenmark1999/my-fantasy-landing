import { useState, useEffect } from 'react';

interface SwitcherModalProps {
  onSelect: (category: string) => void;
}

const SwitcherModal: React.FC<SwitcherModalProps> = ({ onSelect }) => {
  const [selected, setSelected] = useState<string>('');

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    document.body.style.overflow = 'initial';
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'initial';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-600 p-6 rounded-lg text-center text-white">
        <h2 className="text-xl font-semibold">I'm Interested in:</h2>
        <div className="flex justify-center space-x-4">
          <div
            className="cursor-pointer p-4 rounded-lg bg-gray-600 transform transition-transform hover:scale-110"
            onClick={() => handleSelect('girls')}
          >
            <img src="switcher/girls.png" alt="Girls" className="w-40 h-40 object-cover" />
          </div>
          <div
            className="cursor-pointer p-4 rounded-lg bg-gray-600 transform transition-transform hover:scale-110"
            onClick={() => handleSelect('anime')}
          >
            <img src="switcher/anime.png" alt="Anime" className="w-40 h-40 object-cover" />
          </div>
          <div
            className="cursor-pointer p-4 rounded-lg bg-gray-600 transform transition-transform hover:scale-110"
            onClick={() => handleSelect('guys')}
          >
            <img src="switcher/guys.png" alt="Guys" className="w-40 h-40 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitcherModal;
