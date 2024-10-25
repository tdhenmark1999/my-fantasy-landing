import { useEffect } from 'react';
import Image from 'next/image';

interface SwitcherModalProps {
  onSelect: (category: string) => void;
}

const SwitcherModal: React.FC<SwitcherModalProps> = ({ onSelect }) => {
  const handleSelect = (option: string) => {
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
        <h2 className="text-xl font-semibold">I&apos;m Interested in:</h2>
        <div className="flex justify-center space-x-4">
          <div
            className="cursor-pointer p-4 rounded-lg bg-gray-600 transform transition-transform hover:scale-105"
            onClick={() => handleSelect('girls')}
          >
            <Image src="/switcher/girls.png" alt="Girls" width={160} height={160} objectFit="cover" />
          </div>
          <div
            className="cursor-pointer p-4 rounded-lg bg-gray-600 transform transition-transform hover:scale-105"
            onClick={() => handleSelect('anime')}
          >
            <Image src="/switcher/anime.png" alt="Anime" width={160} height={160} objectFit="cover" />
          </div>
          <div
            className="cursor-pointer p-4 rounded-lg bg-gray-600 transform transition-transform hover:scale-105"
            onClick={() => handleSelect('guys')}
          >
            <Image src="/switcher/guys.png" alt="Guys" width={160} height={160} objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitcherModal;
